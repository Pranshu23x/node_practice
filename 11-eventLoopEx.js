const http= require(`http`)

const server= http.createServer((req, res)=>{
    console.log(`DJ VIKAS`)
    res.end(`Hello world`)
  
})

server.listen(5000 ,()=>{ //i
    console.log(`Server listening to port : 5000...`)
})
