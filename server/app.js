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
        socket.join(input.sala); //configura um socket para aquela sala
        usuarios.push(input.nomeLogin);

        //cria um espaço para as mensagens da sala (cra a sala)
        if(logMensagens[input.sala] === undefined){
            logMensagens[input.sala] = [];
        }

        console.log(input.nomeLogin+" entrou na sala "+input.sala+" com o id: "+socket.id);

        socket.broadcast.emit('atualizarMembros', {membros: usuarios})
        socket.emit("iniciarChat", {username: input.nomeLogin, conversa: logMensagens[input.sala]})
        socket.emit("iniciarMembro", {membro: input.nomeLogin})
    })

    socket.on('envio', function(data){
        logMensagens[data.sala].push(data);
        console.log("Recebendo mensagem de socket de id: "+socket.id);
        
        //tira os nomes repetidos dos usuários
        if(!usuarios.includes(data.username)){
            usuarios.push(data.username);
        }
        socket.broadcast.emit("recebe", data);
    });
    
    socket.on("disconnection", function(socket){
        console.log("Socket desconectado com a id: "+socket.id);
    });
})

server.listen(3001, function(){
    console.log("Servidor executando")
})
