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
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/usuarios', (_, response) => {
        connection.query('SELECT * FROM usuario', (err, rows, fields) => {
            if (err) { throw err; }
            return response.json(rows);
        });
    });

    app.post('/usuarios',(_, response) => {
        connection.execute("INSERT INTO usuario VALUES (null, 'batata', 'dcheiwndjnjbasda', 'batata@hotmail.com', '2023-04-25 13:30:00', null, false);");
    });
}

(async () => {
    servidor();
})();
