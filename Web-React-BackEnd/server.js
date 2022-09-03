const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const bodyParser = require("body-parser");
const Axios = require('axios');




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


// // root route with a query
app.get("/",(req,res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName,movieReview,yearReleased,movieType) VALUES ('The Lord of the Rings: The Two Towers','nice one',2002,'Sci-fi'); ";
    pool.query(sqlInsert,(err,result) => {
        res.send('Data has been inserted my Gs');
    });
    
});

app.post("/api/postReview", (req,res) => {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const yearReleased = req.body.yearReleased;
    const movieType = req.body.movieType;
    const ReviewDate = new Date();

    sqlInsert= "INSERT INTO movie_reviews (movieName,movieReview,yearReleased,movieType,ReviewDate) VALUES (?,?,?,?,?);";
    pool.query(sqlInsert,[movieName,movieReview,yearReleased,movieType,ReviewDate], (err, result)=>{
        console.log("data has been inserted well");
        console.log(err);
    });
})




app.get("/api/results", (req, res) => {
    const sqlRead= "SELECT * FROM movie_reviews";
    pool.query(sqlRead,(err,result) => {
        if(err){
            console.log(err);
        }
        res.send(result);

    })
});


// FAKE REST API 

app.get("/api/tasks", (req,res) => {
    Axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => res.send(response.data));
});

//FAKE GALLERY API ENDPOINT

app.get("/api/Users", (req,res)=>{
    Axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => {
                const Users = response.data;
                res.send(Users);
            })
            
});

//Endpoint for Get a single User with ID


app.get("/api/Users/:id", (req,res) =>{

    const user_id = req.params.id;
    Axios.get({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/',
        data: {
            id: user_id
        }
    }).then(response =>{
        res.send(response.data)
    });
});


// Get all players of a team with a API

app.get("/api/players/", async (req, res) =>{

    try{
        const response = await Axios.get("https://www.balldontlie.io/api/v1/players/");
        const results = await response.data;
        //const raw_data = results.data;
        console.log(results);
        res.send(results);
    }
    catch(error){

        console.log(response.status);
        console.error(error);
    }
});


//Get a player with specific ID
app.get('/api/players/:ID', async (req, res) => {
    
    try{
       const pid = req.query.ID
       const response = await Axios.get(`https://www.balldontlie.io/api/v1/players/`,
       {
        params : {
            ID: pid
        }
       });
       const results = await response.data;
       res.send(results);
       console.log(response.data);

       console.log(req.params)
           
    }
        catch(error){
            console.error(error);
        }
});


app.listen( 3001 , () => {
    console.log("our server is listening on port:3001");
});



