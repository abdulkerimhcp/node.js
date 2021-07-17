const http = require('http')
const fs = require('fs')

const hostName = '127.0.0.1'
const port = 3000

const indexPage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const _404Page = fs.readFileSync('404.html')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end(indexPage)
    }
    else if (req.url === '/about') {
        return res.end(aboutPage)
    }
    else if (req.url === '/contact') {
        return res.end(contactPage)
    } 
    else {
        res.statusCode = 404
        res.end(_404Page)
    }
})


server.listen(port, hostName, () => {
    console.log(`Server Çalışıyor, http://${hostName}:${port}`)
})