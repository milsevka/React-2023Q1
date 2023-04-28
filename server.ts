import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send({ message: 'Hello Rick!' });
});
app.listen(3333, () => {
  console.log('Application listening on port 3333!');
});
