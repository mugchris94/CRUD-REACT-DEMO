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
                    <label>Email</label>
                    <input type="email" value={user_email} name="user_email" onChange={(e)=>{
                        setUserEmail(e.target.value);
                    }}/>    

                    <label>Password</label>
                    <input type="password" value={passwd} name="passwd" onChange={(e)=>{
                        setPasswd(e.target.value);
                    }}/>
                    <span><a href="#" rel="none">forgot password</a></span>
                    <input type="submit" value="submit" onClick={() => AuthLog()}/>

                </div>
                
            </form>
        </div>
     );
}
 
export default Login;