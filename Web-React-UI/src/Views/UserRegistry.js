import React from 'react';

import { useState } from 'react';
import '../css/registry.css';


const UserRegistry = () => {
    return ( 
        <div className="registry">
            <form>
                <label>Username</label>
                <input 
                    type="text" 
                    name="username"
                    {...register("username")}
                />
                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    {...register("email")}
                />
                <label>gender</label>
                <select {...register("gender")}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label>Create you password</label>
                <input 
                    type="password"
                    name="password"
                    {...register("password")}    
                />
                <label> Choose Your Domain </label>
                <select {...register("domain")}>
                    <option value="IT">IT</option>
                    <option value="ISU">ISU</option>
                    <option value="FINANCE">IT</option>
                    <option value="ADMIN">ISU</option>
                </select>
            </form>
        </div>
     );
}
 
export default UserRegistry;