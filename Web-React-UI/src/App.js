import React, { useEffect, useState } from "react";
import Axios from "axios";
import './App.css';
import './results.css';




function App() {
  const [movieName, setMovieName] = useState("");
  const [Review, setMovieReview] = useState("");
  const [yearReleased, setYearReleased] = useState("");
  const [movieType, setMovieType] = useState("");

  const [movieReviewList, setMovieReviewList] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/results").then((response) => { console.log(response.data) });
  }, []);
  
  
  const submitReview =()=> {
    Axios.post("http://localhost:3001/api/postReview", {movieName: movieName, movieReview: Review, yearReleased: yearReleased, movieType})
            .then(() =>{
              alert("successful inserted");
            })
  }

  return (
    <div className="Log-App">
      <div className='form'>
      <form>
        <div className="form-component">
          <label>Enter MovieName</label>
          <br/>
          <input type="text" value="" placeholder='Enter Movie Name' name='movieName' onChange={(e) =>{
            setMovieName(e.target.value)
          }}
          required/>
        </div>

        <div className="form-component">
        <label>Enter Movie Review</label>
          <br/>
          <input type="email" value="" placeholder='Enter Movie Review'  name='movieReview' onChange={(e) =>{
            setMovieReview(e.target.value) 
          }}
            required/>
        </div>
        
        <div className="form-component">
          <label>Enter Year Released</label>
          <br/>
          <input type="text" value="" placeholder='Enter year' name='yearReleased' 
            onChange={(e) =>{
              setYearReleased(e.target.value) 
            }}
          required/>
        </div>

        <div className="form-selector">
        <label>Movie Type</label>
          <select id="movieType" name='movieType' 
            onChange={(e) =>{
              setMovieType(e.target.value) 
            }}
          >
            <option value="Drama"> Drama</option>
            <option value="Action">Action </option>
            <option value="Sci-fi">Sci-fi </option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>

        <div className="form-btn">
          <button type="submit" class="button-65" onClick={submitReview}>
            Submit
          </button>
        </div>

      </form>
      </div>

      <div className="results">
          <table class="styled-table">
            <thead>
                <tr>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr class="data">
                    <td>Dom</td>
                    <td>6000</td>
                    <td>6000</td>
                    <td>6000</td>
                </tr>
                              
            </tbody>
    </table>
      </div>

    </div>
  );
}

export default App;
