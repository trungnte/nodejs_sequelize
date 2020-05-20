import 'dotenv/config';
import express from 'express';
import cors from 'cors';

console.log("Start with nodemon!");
console.log(process.env.DATABASE);
console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);

const app = express();

app.use(cors());


app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
})

