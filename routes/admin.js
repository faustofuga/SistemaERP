
const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  if (req.session.user && req.session.user.tipo === 'admin') {
    res.render('admin/dashboard', { user: req.session.user });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
