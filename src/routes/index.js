import express from 'express';
let router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.status(200).send('Connected to server');
});

export default router;
