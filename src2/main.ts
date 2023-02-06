import express, { application } from "express"
import socketio from "socket.io"
import http from "http"
import { createToken } from "./jwt"
import { connect } from "./connect"
import { message } from "./message"

const app = express() // initialize the express lib for use in this project
const server = http.createServer(app) // using the http framework to create a server for the application
const socketioServer = new socketio.Server(server) // opening a websocket connection using the server that was made with http lib

app.use(express.json())

connect(app)

message(app, socketioServer)

socketioServer.on('connection', () => {
    console.log('someone connected')
})

server.listen(3030, () => {

})
