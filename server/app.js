//npm install express path http socket.io ejs
const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ["GET","POST"]
    }
  })

var logMensagens = [];
var usuarios = [];

app.use(express.static(path.join(__dirname, 'public')))
app.set("views", path.join(__dirname, 'public'))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.use("/", function(req, res){
    return "<h2>Oi!</h2>";
})

io.on("connection", function(socket){
    console.log("Socket conectado com a id: "+socket.id)

    socket.on('login', function(input){
        usuarios.push(input.nomeLogin);
        console.log(input.nomeLogin+" entrou na sala "+input.sala)

        socket.emit("mensagensAnteriores", logMensagens)
    })

    socket.on('envio', function(data){
        logMensagens.push(data);
        let novoUsusario = {username: "", message: ""};

        //tira os nomes repetidos dos usuários
        if(!usuarios.includes(data.username)){
            usuarios.push(data.username);
            novoUsusario = data;
        }

        socket.broadcast.emit("novoUsuario", novoUsusario)
        socket.broadcast.emit("lista", usuarios);
        socket.broadcast.emit("recebe", logMensagens);
    });
    
})

server.listen(3001, function(){
    console.log("Servidor executando")
})
