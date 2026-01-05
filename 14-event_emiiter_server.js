const http = require(`http`)

//using event emitter api

const server=http.createServer()
//emits request event

//subscribe to it/listen for it / respond to it
server.on(`request` , (req,res)=>{ // the name would be request , events (server.on)
    res.end(`welcome`)
})
console.log(`server is listening to port 5000`)
server.listen(5000)