import express from 'express';
import data from './data.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Server is working');
});

app.get('/products', (req, res) => {
    res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is running on 5000');
});
