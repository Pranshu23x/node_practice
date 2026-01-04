const http = require(`http`)

const server = http.createServer((req, res)=>{
   if(req.url===`/`){
    res.end(`Welcome to our home page`)
    return
   }
   if(req.url===`/about`){
    res.end(`This is the about section NiggA`)
    return
   }
   res.end(
    `    <html>
        <body>
          <h1> 404 </h1> <br>
          <p> Content not found </p>
          <a href="/"> Homepage </a>
        </body>
    </html>`
   
   )
})
server.listen(5000)