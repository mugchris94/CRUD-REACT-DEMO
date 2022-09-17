import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Profiled = (props) => {

    const params  = useParams();
    const { userDetail, setUserDetail} = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/Users/${params.id}`)
                .then((response) => {
                    setUserDetail(response.data);
                    console.log(params.id);
                    console.log(response.data);
                });
    }, []);

    return ( 
        <div className="profile">
            {userDetail.map((user) => {
                return(
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="#" alt="Card icons"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title - { user.id }</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{user.first_name}</li>
                            <li className="list-group-item">{user.last_name}</li>
                            <li className="list-group-item">{user.weight_pounds}</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                );
                

            })}
            
        </div>
     );
}
 
export default Profiled;