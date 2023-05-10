const express = require('express');
const mysql = require('mysql2');

const SERVIDOR_PORTA = 3000;

const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'tijolo22@',
        database: 'teste'
    }
);
connection.connect();

const servidor = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    
    app.get('/usuarios', (_, response) => {
        response.sendFile(__dirname + '/index.html');
    });

    app.post('/usuarios',(request, response) => {
        var now = new Date();
        var dataHora = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

        connection.execute("INSERT INTO usuario VALUES (null, ?, ?, ?);", [request.body.nome, request.body.email, dataHora]);
        response.redirect('usuarios');
    });

    app.delete('/usuarios/:id', (request, response) => {
        console.log(request.params.id);
        connection.execute("DELETE FROM usuario WHERE idUsuario = ?;", [Number(request.params.id)]);
        response.redirect('/usuarios');
    });
}

(async () => {
    servidor();
})();
