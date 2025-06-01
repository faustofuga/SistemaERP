
const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  if (req.session.user && req.session.user.tipo === 'cliente') {
    res.render('cliente/dashboard', { user: req.session.user });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
