import { useState } from "react"
import Notiflix from 'notiflix';

export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [agreeTermsConditions, setAgreeTermsConditions] = useState(false);

    const register = () => {
        
        if(firstName!="" && lastName!="" && password!="" && conPassword!="" &&agreeTermsConditions!=""){
            Notiflix.Report.success(
                'Registration Success',
                'Please continue login now',
                'Okay',
            );
        }else{
            Notiflix.Notify.failure('Please fill all required fields',{timeout: 3000,});
        }
    }

    return (
      <div class="grid grid-cols-4 gap-1">
         <div></div>
            
          <div class="login-container col-span-2 shadow-2xl p-10">
          
              <form>
              
                  <p class="text-3xl font-semibold text-center">Register Here</p>
  
                  <div class="form-group">
                    <label class="px-0 py-20">First Name</label>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        class="form-input px-4 py-3 rounded-full"
                        onChange={(e)=>{
                            setFirstName(e.target.value);
                        }}
                    />
                  </div>

                  <div class="form-group">
                    <label class="px-0 py-20">Last Name</label>
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        class="form-input px-4 py-3 rounded-full"
                        onChange={(e)=>{
                            setLastName(e.target.value);
                        }}
                    />
                  </div>
  
                  <div class="form-group">
                    <label class="px-0 py-20">Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        class="form-input px-4 py-3 rounded-full"
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                    />
                  </div>
  
                  <div class="form-group">
                    <label class="px-0 py-20">Confirm Password</label>
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        class="form-input px-4 py-3 rounded-full"
                        onChange={(e)=>{
                            setConPassword(e.target.value);
                        }}
                    />
                  </div>

                  <div class="form-group">
                    <input 
                        type="checkbox" 
                        class="form-checkbox rounded text-pink-500" 
                        onChange={(e)=>{
                            setAgreeTermsConditions(e.target.checked);
                        }}
                    />
                    <label class="px-5 py-20">
                    Agreed all <a href="#" class="text-center text-blue-600 font-semibold">Terms</a> and <a href="#" class="text-center text-blue-600 font-semibold">Conditions</a></label>
                  </div>
  
                  <div class="form-group">
                    <button
                        onClick={register}
                        type="button" 
                        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Register Now</button>
                  </div>
  
                  <div class="form-group">
                      Already registered? <a href="./login" class="text-center text-blue-600 font-semibold">Login Here</a>
                  </div>
  
              </form>
              
          </div>
          <div></div>
      </div>
    )
  }
  