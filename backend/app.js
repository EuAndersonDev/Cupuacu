const express = require('express');
const session = require('express-session');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());

// Configuração da sessão
app.use(session({
  secret: 'your_secret_key', // Substitua por uma chave secreta segura
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Defina como true se estiver usando HTTPS
}));

app.use('/', routes);

module.exports = app;