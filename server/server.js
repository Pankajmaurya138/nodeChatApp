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

    //socket listen message with event

    socket.emit("newMessage",{
        from:"Admin",
        text:"Welcome to chat App !!",
        createdAt:new Date().getTime(),
    })
    socket.broadcast.emit("newMessage",{
        from:"Admin",
        text:"New User Joined !!",
        createdAt:new Date().getTime(),
    })
    socket.on("createMessage",(message)=>{
       

        // send message to every one except to the user whose has sent this message
        socket.broadcast.emit('newMessage',{
            from:message.from,
            text:message.text,
            createdAt:new Date().getTime(),
        })
    })

   
    //check here to user connected or not//
    socket.on("disconnect",()=>{
        console.log("user was disconnected to server")
    })

})



const port = process.env.PORT || 3000
server.listen(port,()=>{
console.log(`server is running ${port}`)
    
})