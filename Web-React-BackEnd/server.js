const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const Axios = require('axios');
const { default: axios } = require("axios");
const { response } = require("express");


//middleware use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
    connectionLimit : 10,
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password:'Password@123',
    database:'crud_database',
    debug: false
});

pool.getConnection((err,conn) => {
    if(err){
        console.log(err);
        console.log('Entered into error');
        res.send({
            success: false,
            statusCode: 500
        })
    } else{
        console.log("the connection has been established");
    }
});


// root route with a query
app.get("/",(req,res) => {
    const sqlInsert = "INSERT INTO movie_reviews (id,movieName,movieReview,yearReleased,movieType) VALUES (6,'Inception','Good movie',2010,'Action'); ";
    pool.query(sqlInsert,(err,result) => {
        res.send('Data has been inserted my Gs');
    });
    
});

app.post("/api/postReview", (req,res) => {
    sqlInsert= "INSERT INTO movie_reviews (movieName,moviewReview,yearReleased,movieType) VALUES (?,?,?,?);";
    pool.query(sqlInsert,[movieName,movieReview,yearReleased,movieType], (err, result)=>{
        console.log("data has been inserted well");
    });
})




app.get("/api/results", (req, res) => {
    const sqlRead= "SELECT * FROM movie_reviews";
    pool.query(sqlRead,(err,result) => {
        console.log(result);
    })
});


// FAKE REST API 

app.get("/api/tasks", (req,res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => res.send(response.data));
});




app.listen( 3001 , () => {
    console.log("our server is listening on port:3001");
});