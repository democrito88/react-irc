const database = require('./db');

exports.login = function(arrayLogin){
    return database.selecionar('usuario', ['nome', 'senha'], arrayLogin);
}

exports.selecionar = function(id){
    return database.selecionar('usuario', ['id'], [id]);
}

//A coluna 'mensagem' deve ser, por padrão, nula
exports.criar = function(arrayUser){
    console.log(arrayUser);
    return database.inserir('usuario', ['nome', 'senha'], arrayUser);
}

exports.atualizar = function(arrayUser){
    return database.atualizar('usuario', ['id', 'nome', 'senha', 'mensagem', 'avatar'], arrayUser);
}

exports.deletar = function(id){
    return database.deletar('usuario', id);
}

/*class Usuario{
    constructor(arrayUser){
        this.id = arrayUser['id'];
        this.nome = arrayUser['nome'];
        this.senha = arrayUser['senha'];
        this.mensagem = arrayUser['mensagem'];
        this.avatar = arrayUser['avatar'];
    }
}*/