import express, { application } from "express"
import jwt from "jsonwebtoken"
import sio from "socket.io"
import http from "http"

const app = express()

const server = http.createServer(app) 

const io = new sio.Server(server)

app.use(express.json())

app.post("/connect", (request, response) => {
    let name = request.body.name
    if (!(name && typeof name === "string")){
        name = "anonimo"
    }
    const token = jwt.sign(name, "123")
    return response.status(200).send({token})
})

app.post("/message", (request, response) => {
    const message = request.body.message
    if(!(message && typeof message === "string")){
        return response.status(400).send("please insert a message")
    }
    else{
        const authorization = request.headers['authorization']
        if (!authorization || !authorization.includes('Bearer')){
            return response.status(401).send("token not allowed")
        }

        //@ts-ignore
        const [ _bearer, token ] = authorization?.split(' ')
        const name = jwt.verify(token, '123')

        io.emit('message',{name, message})
        return response.status(200).send({sent: true})
    }
})

io.on('connection', () => {
    console.log('someone connected')   
}) 

server.listen(3030, () => {

})