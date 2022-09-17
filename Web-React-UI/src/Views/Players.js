import React from "react";
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../css/player.css';
import user1 from '../player3.png';

const Players = () => {
    const api_url = "http://localhost:3001/api/players/";
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get(api_url)
               .then((response) =>{
                const res_data = response.data;
                
                console.log(res_data);
                const playerData = res_data.data;
                const playerCount = 3;   
                
                const playerLimit = playerData.slice(0,playerCount); 
                setPlayers(playerLimit);
                 
               })
               .catch((error) => {
                console.error(error);
               })
    },[]);

    
    return ( 
        <div className="players">
        { players.map((player) => {
            return(
                <div className="player-card">
                       <div className="card-top">
                            <img src={user1} className="player_icon" alt="player_icon"/>
                            <div className="stats">
                                <h6>PlayerID: {player.id}</h6>
                                <h6>first_name: {player.first_name} </h6>
                                <h6>last_name: {player.last_name}</h6>
                                <h6>Team : {player.team.full_name}</h6>
                            </div>
                        </div>
                        <div className="bio">
                            <h5>Player Bio : </h5>
                            <p>The Biotechnology Innovation Organization is the largest advocacy 
                                </p>

                            <a href="#" className="card-btn">View Details</a>
                        </div>
                    </div>
            );
        })}    
          

        </div>
     );
}
 
export default Players;