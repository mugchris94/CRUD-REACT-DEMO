import { Axios } from "axios";
import React,{useEffect, useState} from "react";

import '../timeline.css';

const gallery = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [frame, setFrame] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        Axios.get("http://localhost:3001/api/gallery")
                .then((res) => {
                    setFrame(res.data);
                    console.log(res.data);
                });
    }, []);

    return ( 
        <div className="timeline">
            { frame.map((layer) => {
                
                <div className="frame">
                  <label>{ layer.albumId}</label>
                  <label>{ layer.title }</label>
                  <img src={ layer.url } alt='frame'/>
                  <label>{ layer.thumbnailUrl }</label>
                </div>

            })}
            
        </div>
     );
}
 
export default gallery;
