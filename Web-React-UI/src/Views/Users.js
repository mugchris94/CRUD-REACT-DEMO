/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React,{useEffect, useState} from 'react';

import '../timeline.css';

const Users = (props) =>{

    const [persons, setPersons] = useState([]);
    const baseURL = "http://localhost:3001/api/Users";
  
    useEffect(() => {
        axios.get(baseURL)
                .then((res) => {
                   
                    const data = res.data;
                    if(data.length = 4){
                        setPersons(data);
                    }
                    setPersons(data);
                    console.log(res.status);
                    console.log(res.config);
                    console.log(res.statusText);
                    console.log(data);
                    console.log(data[1].name);
                })
                .catch((err) => console.error(err));
    }, []);

    const list =  persons.map((person) => {
            return (
                <div class="main_card" style={{width: "18rem"}}>
                
                    <div class="card">
                        <h5 class="card_title">{person.username}</h5>
                        <h6>{person.name}</h6>
                        <h7>{person.email}</h7>
                        <h7>{person.website}</h7>
                        <p class="card_text">{person.company.name}</p>
                        <a href="#" class="btn btn-info" >more Details</a>
                    </div>
                </div>
        )
      })

    return ( 
        <div className="timeline">
        
             
            {list}
                 
            
        </div>
     );
}

export default Users;
