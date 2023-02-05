import express, { application } from "express"
import socketio from "socket.io"
import http from "http"


const app = express() // initialize the express lib for use in this project
const server = http.createServer(app) // using the http framework to create a server for the application
const socketioServer = new socketio.Server(server) // opening a websocket connection using the server that was made with http lib

app.use(express.json())

app.post("/connect", (request, response) => {
    let name = request.body.name // it is expected that there will be send a 'name' field in the request, it will be the name of the user who will connect in the chat

    if (!(name && typeof name === "string")){ // verify the name, and if this is empty, we gives a name to him
        name = "unnamed"
    }
    

}) // using callback to response everything
