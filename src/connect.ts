import { Application } from "express"
import { createToken } from "./jwt"

export function connect(express: Application){
    express.post("/connect", (request, response) => {
        let name = request.body.name // it is expected that there will be send a 'name' field in the request, it will be the name of the user who will connect in the chat

        if (!(name && typeof name === "string")){ // verify the name, and if this is empty, we gives a name to him
        name = "unnamed"
        }
        
        const token = createToken(name)
        return response.status(200).send({token})
    }) // using callback to response everything
}
