
//iniciando o servidor//

const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes') //chamando o ficheiro de rotas

const server = express()

//chamando o estilo css
server.use(express.static('public'))
server.use(routes)


//configurando template engine nunjucks//
server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})


//starting server
server.listen(3000, function() {
    console.log("server is running")
})