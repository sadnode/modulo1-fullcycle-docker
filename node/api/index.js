const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello World');
})

app.listen(3000);
