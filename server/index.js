import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongodb/connect.js"

import postRoutes from './routes/postRoutes.js'
import dallERoutes from './routes/dallERoutes.js'

dotenv.config()

const server = express()
server.use(cors())
server.use(express.json({limit: '50mb'}))

server.use('/api/v1/post', postRoutes)
server.use('/api/v1/dallE', dallERoutes)

server.get('/', async (req, res) => {
    res.send('hello from dall-e')
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        server.listen(3001, () => console.log('Server Has Started On Port https://dalle-ibwe.onrender.com'))
    } catch (error) {
        console.log(error)
    }
}

startServer()