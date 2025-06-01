const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  if (!req.session.user || req.session.user.tipo !== 'admin') {
    return res.redirect('/login');
  }
  res.render('admin/dashboard', { user: req.session.user });
});

module.exports = router;