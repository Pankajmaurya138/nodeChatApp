let socket = io();
socket.on("connect",()=>{
    console.log("connected to server")
})

//here the emit event name is same as defined in server.js

// socket.emit("createMessage",{
//     from:"Pankaj",
//     text:"Hello Pankaj Maurya"
// })


socket.on("newMessage",(message)=>{
    console.log("🚀 ~ file: index.js ~ line 15 ~ socket.on ~ message", message)
})


socket.on("disconnect",()=>{
    console.log("disconnected to server")
})