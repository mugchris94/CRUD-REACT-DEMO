import { useState } from "react";
import "../css/log.css";



const Login = (props) => {

    const [user_email, setUserEmail] = useState();
    const [passwd, setPasswd] = useState();

    const AuthLog = () =>{
        
    }
    
    return ( 
        <div className="login-form">
            <form className="logform">
                <div className="form-input">
                    <input type="email" value="email" name="user_email"/>    
                    <input type="password" value="passwd" name="passwd"/>
                </div>
                
                <input type="submit" value="submit" onClick={() => AuthLog()}/>
            </form>
        </div>
     );
}
 
export default Login;