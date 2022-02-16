import database from './db';

class Usuario{
    constructor(arrayUser){
        this.id = arrayUser['id'];
        this.nome = arrayUser['nome'];
        this.senha = arrayUser['senha'];
        this.mensagem = arrayUser['mensagem'];
        this.avatar = arrayUser['avatar'];
    }

    
    login(arrayLogin){
        return database.selecionar('usuario', ['nome', 'senha'], arrayLogin);
    }

    static selecionar(id){
        return database.selecionar('usuario', ['id'], [id]);
    }

    static criar(arrayUser){
        return database.inserir('usuario', ['nome', 'senha', 'mensagem', 'avatar'], arrayUser);
    }

    static atualizar(arrayUser){
        return database.atualizar('usuario', ['id', 'nome', 'senha', 'mensagem', 'avatar'], arrayUser);
    }

    static deletar(id){
        return database.deletar('usuario', id);
    }

    
}