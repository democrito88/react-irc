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


const Usuario = require('./usuarioController');

var logMensagens = [];
var usuarios = [];

app.use(express.static(path.join(__dirname, 'public')))
app.set("views", path.join(__dirname, 'public'))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.use("/", function(req, res){
    return "<h2>Oi!</h2>";
})

app.use("/cadastrar", function(req, res){
    res.send("../client/components/");
})

io.on("connection", function(socket){
    console.log("Socket conectado com a id: "+socket.id)

    socket.on('cadastrar', function(input){
        console.log(input);
        Usuario.criar([input.nome, input.senha]);
    })

    socket.on('login', function(input){
        socket.join(input.sala); //configura um socket para aquela sala
        
        if(usuarios[input.sala] === undefined){
            usuarios[input.sala] = [];
        }

        usuarios[input.sala].push(input.nomeLogin);

        //cria um espaço para as mensagens da sala (cra a sala)
        if(logMensagens[input.sala] === undefined){
            logMensagens[input.sala] = [];
        }

        console.log(input.nomeLogin+" entrou na sala "+input.sala+" com o id: "+socket.id);

        socket.to(input.sala).emit('atualizarMembros', {membros: usuarios[input.sala]})
        socket.emit("iniciarChat", {username: input.nomeLogin, conversa: logMensagens[input.sala]})
        socket.emit("iniciarMembro", {membros: usuarios[input.sala]})
    })

    socket.on('envio', function(data){
        logMensagens[data.sala].push(data);
        console.log("Recebendo mensagem de socket de id: "+socket.id);
        
        //tira os nomes repetidos dos usuários
        if(!usuarios[data.sala].includes(data.username)){
            usuarios[data.sala].push(data.username);
        }
        socket.to(data.sala).emit("recebe", data); 
    });
    
    socket.on("disconnection", function(socket){
        console.log("Socket desconectado com a id: "+socket.id);
    });
})

server.listen(3001, function(){
    console.log("Servidor executando")
})
