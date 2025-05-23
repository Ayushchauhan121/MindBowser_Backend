const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword], (err) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: 'User created' });
    });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  pool.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    res.json({ token });
  });
});

module.exports = router;
