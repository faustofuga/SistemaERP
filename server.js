require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Recomendado para requisições JSON
app.use(express.static(path.join(__dirname, 'public')));

// Sessão
app.use(session({
  secret: 'requestti-secret',
  resave: false,
  saveUninitialized: false // mais seguro
}));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
