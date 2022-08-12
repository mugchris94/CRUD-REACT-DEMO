/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import '../board.css';
import movie from '../movie1.jpg';


const movieBoard = (props) => {
    
    const [movieList, setmovieList] = useState([]);

    useEffect(() => { 
      Axios.get("http://localhost:3001/api/results")
            .then((response) => { 
                setmovieList(response.data);
                console.log(response.data);
            });
  
    }, [])
    

    return(
     
     <div className='board'>
       { movieList.map((movie) => {
         <div className='movie_card'>
            <label>{movie.movieName}</label>
            <img src={movie} alt='poster'/>
            <span>{movie.movieReview}</span>
            <label>{movie.yearReleased}</label>
            <label>{movie.movieType}</label>
            <span>{ movie.ReviewDate}</span>
         </div>

       })};
       
     </div>

    );
}

export default movieBoard;
