const http = require('http') 

const hostName = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello Node.js')
})


server.listen(port,hostName,()=>{
    console.log(`Server Çalışıyor, http://${hostName}:${port}`)
})