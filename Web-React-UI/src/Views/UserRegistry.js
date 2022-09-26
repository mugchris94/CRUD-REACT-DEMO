import React from 'react';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../css/registry.css';


const UserRegistry = () => {

    const { register, handleSubmit } = useForm();

    return ( 
        <div className="registry">
            <form>
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
        </div>
     );
}
 
export default UserRegistry;