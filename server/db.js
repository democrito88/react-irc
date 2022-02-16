const mysql = require('mysql');
const db = mysql.createConnection({
    user: 'phpmyadmin',
    password: '',
    host: 'localhost',
    database: 'irc'
});

module.exports = {
    selecionar: function(tabela, arrayColunas, arrayValores){
        let selectQuery = "SELECT * FROM "+tabela+" WHERE ";

        for(let i = 0; i < arrayColunas.length; i++){
            selectQuery += arrayColunas[i]+" = "+arrayValores[i];
            if(i < (arrayColunas.length - 1)){
                selectQuery += ", ";
            }
        }
        db.query(
            selectQuery,
            arrayValores,
            function(error, mensagem){
                if (error) {
                    return error;
                } else {
                    return mensagem;
                }
            }
        );
    },
    
    atualizar: function(tabela, arrayColunas, arrayValores){
        let stringColunas = "";
        let stringInterrogacao = "";
        let updateQuery = "UPDATE "+tabela+" SET ";

        for(let i = 0; i < arrayColunas.length; i++){
            updateQuery += arrayColunas[i]+" = "+arrayValores[i];
            if(i < (arrayColunas.length - 1)){
                updateQuery += ", ";
            }
        }

        updateQuery += " WHERE id = "+arrayValores['id']+";";

        db.query(
            updateQuery,
            arrayValores,
            function(error, data){
                if (error) {
                    return error;
                } else {
                    return "Atualizado com sucesso";
                }
            }
            );
    },
    
    inserir: function(tabela, arrayColunas, arrayValores){
        let stringColunas = "";
        let stringInterrogacao = "";
    
        for(let i = 0; i < arrayColunas.length; i++){
            stringColunas += arrayColunas[i];
            stringInterrogacao += "?";
    
            if(i < (arrayColunas.length - 1)){
                stringColunas += ", ";
                stringInterrogacao += ", ";
            }
        }
    
        db.query(
            "INSERT INTO "+tabela+"("+stringColunas+") VALUES("+stringInterrogacao+")",
            arrayValores,
            function(error, data){
                if (error) {
                    return error;
                } else {
                    return "Inserido com sucesso";
                }
            }
            );
    },
    
    deletar: function(tabela, id){
        db.query(
            "DELETE FROM "+tabela+" WHERE id = "+id,
            function(error, mensagem){
                if(error){
                    return error;
                }else{
                    return "Deletado com sucesso"
                }
            }
        );        
    }
}