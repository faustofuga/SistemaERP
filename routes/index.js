// routes/index.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/login', (req, res) => {
  res.render('login', { error: null });
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
