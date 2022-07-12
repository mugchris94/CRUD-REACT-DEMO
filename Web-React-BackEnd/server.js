const express = require('express');
const app = express();
const port = 3001;

app.get('/',(req,res) => {
    res.send('Hello World for my Gs');
});

app.listen( port , () => {
    console.log(`our server is listening on port ${port}`);
});