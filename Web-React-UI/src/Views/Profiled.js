import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Profiled = (props) => {

    const { id } = useParams();
    const { userDetail, setUserDetail} = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/Users/:{id}")
                .then((response) => {
                    setUserDetail(response.data);

                    console.log(response.data);
                });
    }, [userDetail]);

    return ( 
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="#" alt="Card icons"/>
                <div className="card-body">
                    <h5 className="card-title">Card title - { id }</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
     );
}
 
export default Profiled;