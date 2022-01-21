//npm install express socket.io cors
const express = require('express');
const app = express();
const cors = require('cors')
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors());

var usuarios = [];
var logMensagens = [];

io.on("connection", function(socket){
    console.log("Socket conectado com a id: "+socket.id)

    socket.on("login", function(login){
        usuarios.push(login.username);
        console.log(login.username+" se conectou");
    });

    socket.on("logout", function(user){
        usuarios.pop(user.username);
        console.log(login.username+" se desconectou");
    });

    socket.emit("mensagensAnteriores", logMensagens)

    socket.on('envioMensagem', function(data){
        logMensagens.push(data);
        let novoUsusario = {username: "", message: ""};

        //tira os nomes repetidos dos usuĂ¡rios
        if(!usuarios.includes(data.username)){
            usuarios.push(data.username);
            novoUsusario = data;
        }

        socket.broadcast.emit("novoUsuario", novoUsusario)
        socket.broadcast.emit("lista", usuarios);
        socket.broadcast.emit("recebeMensagem", logMensagens);
    });
    
})

app.listen(3001, function(){
    console.log("Servidor rodando na porta 3001.");
});