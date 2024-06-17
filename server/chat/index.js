import express from 'express'
import { createServer } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Server } from 'socket.io'
import { connectDB } from '../config/connection'

const port = 8000
const app = express()
const server = createServer(app)
const io = new Server(server, {
    connectionStateRecovery: {}
})
const _dirname = dirname(fileURLToPath(import.meta.url))  


app.get('/',(req, res)=>{
    res.sendFile(join(__dirname, 'index.html'))
})

io.on('connection', (socket)=>{
    socket.on('chat message', async (msg) => {
        let result;
        try {
            result = await userModel.create()
        } catch(error) {
            console.log('Error occured')
        }
        io.emit('chat message', msg)
    });
})

server.listen(port, async ()=>{
    try {
        await connectDB
        console.log("Connected with DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server runs on port: ${port}`)
})