import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import "../css/log.css";



const Login = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ userData, setUserData ] = useState();   
    const onSubmit = (data) =>{
        setUserData(JSON.stringify(data));
        console.log(data);
    }
    
    return ( 
        <div className="login-form">
            <form className="logform" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input">
                    <label>Email</label>
                    <input 
                        type="email"                      
                        name="user_email" 
                        {...register("email", {required: "email is required."})}
                    />    

                    <label>Password</label>
                    <input 
                        type="password"
                        name="passwd" 
                        {...register("password", { required: "password is required."})}
                    />
                    
                    <label>Domain</label>
                    <select name="domain" {...register("domain")}>
                        <option value="GTBank">GTBank</option>
                        <option value="FINABank">FINABank</option>
                        <option value="BACAR">BACAR</option>
                       
                    </select>

                    <span><a href="#" rel="none">forgot password</a></span>
                    <input type="submit" value="Submit" />
                    

                </div>
              
            </form>
            { userData }
        </div>
        
     );
}
 
export default Login;