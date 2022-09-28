import React from 'react';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../css/registry.css';


const UserRegistry = () => {

    const { register, handleSubmit } = useForm();
    const [UserData, setUserData ] = useState([]);

    const registerData= (data)=>{
        
        const results = JSON.stringify(data);
        console.log(results);
        setUserData(results);
    }


    return ( 
        <div className='log-container'>
            
            <nav>
                <span className='logo'><Link to='/'>mobo hub</Link></span>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Login">Log in</Link></li>
                    <li><Link to="/About">About us</Link></li>
                </ul>
            </nav>

            <div className="registry">
            
            <form onSubmit={handleSubmit(registerData)}>
                <label>Username</label>
                <input 
                    type="text" 
                    name="username"
                    {...register("username", { required : "username required"})}
                />
                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    {...register("email", { required: "email is required"})}
                />
                <label>gender</label>
                <select {...register("gender", { required: true })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label>Create you password</label>
                <input 
                    type="password"
                    name="password"
                    {...register("password", { required: true })}    
                />
                <label> Choose Your Domain </label>
                <select {...register("domain", { required: true })}>
                    <option value="IT">IT</option>
                    <option value="ISU">ISU</option>
                    <option value="FINANCE">IT</option>
                    <option value="ADMIN">ISU</option>
                </select>

                <input type="submit" name='submit' />
            </form>

            <label>{UserData}</label>

        </div>
        </div>
        
     );
}
 
export default UserRegistry;