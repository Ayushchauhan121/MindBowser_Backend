const express = require('express');
const { pool } = require('../config/db');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, (req, res) => {
  const { title, content } = req.body;
  pool.query('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)',
    [title, content, req.user.id], (err) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: 'Post created' });
    });
});

router.get('/', (req, res) => {
  pool.query('SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id',
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
});

router.get('/:id', (req, res) => {
  pool.query('SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = ?',
    [req.params.id], (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    });
});

router.put('/:id', authenticate, (req, res) => {
  const { title, content } = req.body;
  pool.query('UPDATE posts SET title = ?, content = ? WHERE id = ? AND user_id = ?',
    [title, content, req.params.id, req.user.id], (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Post updated' });
    });
});

router.delete('/:id', authenticate, (req, res) => {
  pool.query('DELETE FROM posts WHERE id = ? AND user_id = ?',
    [req.params.id, req.user.id], (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Post deleted' });
    });
});

module.exports = router;
