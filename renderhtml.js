const http = require('http')
const {readFileSync} = require('fs')


const homepage= readFileSync('index.html')

const server = http.createServer((req,res) =>{
    const url = req.url;

    if(url ==="/"){
    res.writeHead(200,{'content-type': "text/html"})
    res.write(homepage)
    res.end()
    }
    else if(url ==="/about"){
        res.writeHead(200,{'content-type': "text/html"})
        res.write("<h1>ABOUT PAGE </h1>")
        res.end()
        }
    else{
        res.writeHead(404,{'content-type': "text/html"})
        res.write("<h1>page dont existssss </h1>")
        res.end()
    }
    
 }
  

)

server.listen(3000)