import React from "react";
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../css/player.css';

const Players = () => {
    const api_url = "http://localhost:3001/api/players/";
    const {players, setPlayers } = useState([]);

    useEffect(() => {
        axios.get(api_url)
               .then((response) =>{
                const results = response.data;
                setPlayers(results.data);
               })
               .catch((error) => {
                console.error(error);
               })
    },[]);

    const results = players.map((player) => {
            return(
                <div className="player-card">
                    <div className="card-top">
                        <img src="#" className="player_icon" alt="player_icon"/>
                        <div className="stats">
                            <h6>city: </h6>
                            <h6>conference: </h6>
                            <h6>division: </h6>
                            <h6>team full name: </h6>
                        </div>
                    </div>
                    <div className="bio">
                        <h5>Project based: </h5>
                        <p>The Biotechnology Innovation Organization is the largest advocacy 
                            association in the world representing the biotechnology industry</p>

                        <a href="#" className="card-btn">View Details</a>
                    </div>
                </div>
            )
    });

    return ( 
        <div className="players">
            
          {results}

        </div>
     );
}
 
export default Players;