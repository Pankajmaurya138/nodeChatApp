const path =require('path')

const express = require('express')
let app = express()
const publicPath = path.join(__dirname,'/../public')
const http = require('http')
const socketIO = require('socket.io')

app.use(express.static(publicPath))
let server = http.createServer(app)

let io = socketIO(server)

io.on('connection',(socket)=>{
    console.log("New user has connected")


    //check here to user connected or not//
    socket.on("disconnect",()=>{
        console.log("user was disconnected to server")
    })

})



const port = process.env.PORT || 3000
server.listen(port,()=>{
console.log(`server is running ${port}`)
    
})