
//iniciando o servidor//

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//chamando o estilo css
server.use(express.static('public'))


//configurando template engine nunjucks//
server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

//adicionando rotas//
server.get("/", function(req, res) {
    return res.render("index")
})









server.listen(3000, function() {
    console.log("server is running")
})