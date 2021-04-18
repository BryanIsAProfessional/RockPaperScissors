const port = 8000
const express = require('express')
const app = express()
const server = require('http').createServer()
const WebSocket = require('ws')

const wss = new WebSocket.Server({ server: server })

const messages = []

app.get('/', (req, res) => res.send("Hello World!"))

wss.on('connection', function connection(ws){
    console.log("New connection created!")
    ws.send("Server: Connection started!")
    messages.forEach(function send(message){
        ws.send(message)
    })

    ws.on("message", function incoming(message){

        messages.push(message)
        console.log(messages)

        wss.clients.forEach(function each(client){
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(message)
            }
        })
    })
})

server.listen(port, () => console.log("Listening on port " + port))