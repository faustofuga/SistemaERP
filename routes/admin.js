const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
<<<<<<< HEAD
  try {
    if (!req.session.user || req.session.user.tipo !== 'admin') {
      return res.redirect('/login');
    }

    res.render('admin/dashboard', { user: req.session.user });
  } catch (error) {
    console.error('Erro ao carregar /admin/dashboard:', error);
    res.status(500).send('Erro interno no servidor');
=======
  if (!req.session.user || req.session.user.tipo !== 'admin') {
    return res.redirect('/login');
>>>>>>> parent of 08fc010 (Update admin.js)
  }
  res.render('admin/dashboard', { user: req.session.user });
});

module.exports = router;