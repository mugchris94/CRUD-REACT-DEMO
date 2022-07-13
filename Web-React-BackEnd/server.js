const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:
    user:
    password:
    database:
})


app.get('/',(req,res) => {
    res.send('Hello World for my Gs');
});


//
const port = 3001;

app.listen( port , () => {
    console.log(`our server is listening on port ${port}`);
});