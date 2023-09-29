const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'TweetHubDB',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados!');
  }
});

//linha adicional aqui

app.use(express.json());

// Rotas aqui...

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
