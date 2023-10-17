import express from "express";
import cors from 'cors'

const app = express()
app.get('/', (_req, res) =>{
 res.send('Hola Api')
})

app.use(cors())
app.use(express.json())



const server = app.listen(8000,() =>{
console.log('🚀server up in http://localhost:8000/')
} )
export {server, app}