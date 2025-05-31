const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/', (req, res) => {
  res.render('home');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
  const user = result.rows[0];

  if (user && password === user.senha) {
    req.session.userId = user.id;
    res.redirect('/dashboard');
  } else {
    res.render('login', { error: 'Credenciais inválidas' });
  }
});

router.get('/dashboard', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  res.render('dashboard');
});

module.exports = router;
