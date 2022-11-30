import express from 'express'
import {conn} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async (req, res) => {
	const [rows]= await conn.query("SELECT * FROM users")
	res.json(rows)
} )

app.get('/ping', async (req, res) => {
	const [result] = await conn.query("SELECT 'Hello, World' as result ")
	res.json(result)
	console.log(result);
} )

app.get('/create', async (req, res) => {
	const result = await conn.query("INSERT INTO users(nombre) VALUES ('Joan')")
	res.json(result)
})


app.listen(PORT)
console.log('Server on localhost port ' + PORT);