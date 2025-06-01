<<<<<<< HEAD
// routes/index.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db');
=======
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login - SistemaERP</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #1f8a70;
      --light: #f9f9f9;
      --text: #333;
      --white: #fff;
    }
>>>>>>> parent of ce270de (Revert "sistema login funcionando, cara nova na tela")

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

<<<<<<< HEAD
// Página inicial
router.get('/', (req, res) => {
  res.render('home'); // Isso busca o arquivo views/home.ejs
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1 AND senha = $2',
      [email, password]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      req.session.user = user;

      if (user.tipo === 'admin') {
        return res.redirect('/admin/dashboard');
      } else if (user.tipo === 'cliente') {
        return res.redirect('/cliente/dashboard');
      } else {
        return res.render('login', { error: 'Tipo de usuário inválido.' });
      }
    } else {
      return res.render('login', { error: 'E-mail ou senha inválidos.' });
    }
  } catch (err) {
    console.error('Erro no login:', err);
    return res.status(500).render('login', { error: 'Erro no servidor.' });
  }
});

module.exports = router;
=======
    body {
      font-family: 'Inter', sans-serif;
      background: var(--light);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: var(--text);
      padding: 20px;
    }

    .login-container {
      background: var(--white);
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
      text-align: center;
    }

    .login-container img {
      width: 120px;
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 24px;
      color: var(--primary);
    }

    input {
      width: 100%;
      padding: 12px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 12px;
      font-size: 16px;
    }

    button {
      width: 100%;
      padding: 12px;
      background: var(--primary);
      color: var(--white);
      border: none;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background: #176d57;
    }

    .error {
      color: red;
      margin-bottom: 10px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      .login-container {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="login-container">
    <img src="/image/logo/logo.png" alt="Logo SistemaERP" />
    <h2>Login</h2>
    <% if (error) { %><div class="error"><%= error %></div><% } %>
    <form method="POST" action="/login">
      <input type="email" name="email" placeholder="E-mail" required />
      <input type="password" name="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
</body>
</html>
>>>>>>> parent of ce270de (Revert "sistema login funcionando, cara nova na tela")
