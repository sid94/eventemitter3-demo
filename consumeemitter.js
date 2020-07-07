const EventEmitter =  require("./index.js")


EventEmitter.on('stream',(stream)=>{
    console.log(stream)
})