import React from 'react';
import { useState } from "react";
import Notiflix from 'notiflix';
import  { Navigate } from 'react-router-dom';

export default function Login(props) {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        
        if(username!="" && password!=""){
            Notiflix.Notify.success('Login Success',{timeout: 3000,});
            <Navigate to='/' />
        }else{
            Notiflix.Notify.failure('Please fill all required fields',{timeout: 3000,});
        }
    }

  return (
    <div class="grid grid-cols-4 gap-1">
       <div></div>
        <div class="login-container col-span-2 shadow-2xl p-10">
            
            <form>
            
                <p class="text-3xl font-semibold text-center">Welcome Back {props.name}</p>
                <br></br><br></br>
                <div class="form-group">
                    <label class="px-0 py-20">Username or Email</label>
                    <input 
                        onChange={(e)=>{
                            setUserName(e.target.value);
                        }}
                        type="text" 
                        placeholder="UserName" 
                        class="form-input px-4 py-3 rounded-full"/>
                </div>
                
                <div class="form-group">
                    <label class="px-0 py-20">Password</label>
                    <input
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        type="password" 
                        placeholder="Password" 
                        class="form-input px-4 py-3 rounded-full"/>
                </div>

                <div class="form-group">
                    <input type="checkbox" class="form-checkbox rounded text-pink-500" />
                    <label class="px-5 py-20">Keep me logged in</label>
                </div>

                <div class="form-group">
                    <button onClick={login} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login Now</button>
                </div>

                <div class="form-group">
                    Not have an account? <a href="./register" class="text-center text-blue-600 font-semibold">Registred Here</a>
                </div>

            </form>
            
        </div>
        <div></div>
    </div>
  )
}
