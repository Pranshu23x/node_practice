// EventEmitter
//🔹 Is EventEmitter a class or a module?
//Both — but at different levels.
//events → is a module
//EventEmitter → is a class exported by that module

//on registers, emit excute on response , ORDER MATTERS, listen first
// emit later
const EventEmitter= require(`events`)
const customEmitter=  new EventEmitter()

customEmitter.on(`response`, (name , id)=>{
    console.log(`data recived from user ${name} with id ${id}`)
})

customEmitter.emit(`response` , `pranshu` , `22`)


