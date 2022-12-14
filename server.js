import express from 'express';
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('<h2>This that pink venom..</h2>');
});

app.listen(PORT, () => console.log(`App listening on ${PORT}`));