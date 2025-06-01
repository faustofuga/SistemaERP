const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/', (req, res) => {
  res.render('home');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1 AND senha = $2',
      [email, password]
    );

    if (result.rows.length > 0) {
      // Sucesso: usuário encontrado
      req.session.userId = result.rows[0].id;
      res.redirect('/dashboard');
    } else {
      // Falhou: não encontrou
      res.render('login', { error: 'E-mail ou senha inválidos.' });
    }
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'Erro ao conectar ao banco de dados.' });
  }
});

router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// Dashboard (protegido)
router.get('/dashboard', (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  res.render('dashboard');
});

module.exports = router;
