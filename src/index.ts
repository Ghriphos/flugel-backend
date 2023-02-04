import express from 'express'

const app = express();
const users = ['Richard', 'Itallo', 'Luis'];

function isNumber(number: string) {
    return /[0-9]+/g.test(number)
}

app.use(express.json())

app.get("/", (req, res) => {
    res.send({send: "hello, world"})
});

app.get("/:id", (request, res) => {
   
    if (isNumber(request.params.id)){
        const id = parseInt(request.params.id)
        res.send(true)
    }
    else{
        return res.status(400).send("the route isn't a number")
    }
});

app.post("/createUser", (request, response) => {
    if(undefined){
        const { id, name } = request.body
        console.log({ id, name })
    }
    
})

app.listen(3030, () => {
    console.log("the server is alive")
});