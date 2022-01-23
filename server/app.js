//npm install express socket.io cors http nodaemon
const express = require('express');
const app = express();
const cors = require('cors')
//const server = require('http').createServer(app);
/*const io = require('socket.io')(server);*/
const socket = require('socket.io');

app.use(cors());
app.use(express.json());

var usuarios = [];
var logMensagens = [];

app.get("/", function(req, res){
    res.send("<h1>Servidor rodando na porta 3001.</h1>");
});

var server = app.listen(3001, function(){
    console.log("Servidor rodando na porta 3001.");
});

io = socket(server, {
    cors: {
        origin: "*",    
        methods: ["GET", "POST"],    
        allowedHeaders: ["Access-Control-Allow-Origin"],    
        credentials: true  
    }
});

io.on("connection", function(socket){
    console.log("Socket conectado com a id: "+socket.id)

    socket.on("login", function(login){
        usuarios.push(login.username);
        socket.join(login);
        console.log(login.username+" se conectou");
        socket.emit('ingressar', {logado: true, username: login.username, mensagens: logMensagens});
    });

    socket.on("logout", function(user){
        usuarios.pop(user.username);
        console.log(user.username+" se desconectou");
    });

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
    
});