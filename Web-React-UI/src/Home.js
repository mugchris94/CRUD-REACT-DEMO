import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";


const Home = (props) => {
    const [movieName, setMovieName] = useState("");
    const [movieReview, setMovieReview] = useState("");
    const [yearReleased, setYear] = useState("");
    const [movieType, setMovieType] = useState("");
  
    const [movieReviewList, setMovieReviewList] = useState([]);
  
    useEffect(() => {
      Axios.get("http://localhost:3001/api/results").then((response) => { 
        
        setMovieReviewList(response.data);
        console.log(response.data) 
      });
    }, []);
    
    
    const submitReview =()=> {
      Axios.post("http://localhost:3001/api/postReview", { movieName: movieName, movieReview: movieReview, yearReleased: yearReleased, movieType })
              .then(() =>{
                console.log("successful inserted");
                alert("got inserted please try");
              })
    }
    
 
   

  return (
    <div className="Log-App">
      <div className='form'>
      <button type="button" className="btn btn-info">
          Notifications <span className="badge badge-light">4</span>
        </button>
      <form>
        <div className="form-component">
          <label>Enter MovieName</label>
          <br/>
          <input type="text" placeholder='Enter Movie Name' name='movieName' onChange={(e) =>{
            setMovieName(e.target.value)
          }}
          required/>
        </div>

        <div className="form-component">
        <label>Enter Movie Review</label>
          <br/>
          <input type="text"  placeholder='Enter Movie Review'  name='movieReview' onChange={(e) =>{
            setMovieReview(e.target.value) 
          }}
            required/>
        </div>
        
        <div className="form-component">
          <label>Enter Year Released</label>
          <br/>
          <input type="text"  placeholder='Enter year' name='yearReleased' 
            onChange={(e) =>{
              setYear(e.target.value) 
            }}
          required/>
        </div>

        <div className="form-component">
        <label>Movie Type</label>
          <input id="movieType" name='movieType' type="text" placeholder="Enter Movie type " onChange={(e) =>{ setMovieType(e.target.value) }}/>
        </div>

        <div className="form-btn">
          <button type="submit" class="button-65" onClick={submitReview}>
            Submit
          </button>
        </div>

      </form>
      </div>

      <div className="results">


          <table id="styled-table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Year</th>
                    <th>Movie Type</th>
                    <th>ReviewDate</th>
                    <th>Action</th>
                    <th id='selector'><span><input type='checkbox' /></span></th>

                </tr>
            </thead>
            <tbody>
              { movieReviewList.map((movie) => (
                  
                  <tr className="data">
                    <td>{ movie.id }</td>
                    <td>{ movie.movieName }</td>
                    <td> { movie.movieReview }</td>
                    <td>{ movie.yearReleased }</td>
                    <td>{ movie.movieType } </td>
                    <td>{ movie.ReviewDate } </td>
                    <td><span id="detclick"><a href="#"> View Details </a></span></td>
                    <td><span><input type='checkbox' /></span></td>
                  </tr>
              ))}
               
              
            </tbody>
    </table>
      </div>

    </div>
  );

}
 
export default Home;