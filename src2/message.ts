import { Application } from "express"
import { checkAuthorization } from "./utils"
import { verifyToken } from "./jwt"
import { Server } from "socket.io"

export function message(express: Application, io: Server){
    express.post("/message", (request, response) => {
        const message = request.body.message
        if(!(message && typeof message === "string")){
            return response.status(400).send("please insert a message")
        }
        else{
            const authorization = request.headers['authorization']

            console.log(authorization)

            const name = verifyToken(checkAuthorization(authorization))
            io.emit('message', {name, message})
            return response.status(201).send({sent: true})
        }
    })
}