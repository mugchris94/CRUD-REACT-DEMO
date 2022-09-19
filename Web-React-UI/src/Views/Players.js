import React from "react";
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../css/player.css';
import user1 from '../Player1.png';

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
                            
                        </div>
                        <div className="bio">
                            <div className="stats">
                                <h7 id="pname">{player.first_name} {player.last_name}</h7><br/>
                                <h7><strong>Team: </strong> {player.team.full_name}</h7>
                            </div>
                            
                            <p>Durant was drafted second, behind Greg Oden, in the NBA draft by the Seattle Supersonics. He played his first year in Seattle and then the team relocated to Oklahoma City and changed its name to the Thunder. </p>
                            <button href="#" className="card-btn">View Details</button>
                        </div>
                    </div>
            );
        })}    
          

        </div>
     );
}
 
export default Players;