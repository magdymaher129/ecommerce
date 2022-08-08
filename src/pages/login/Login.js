import { Fragment,  useState } from "react";
import Navbar from '../../component/Navbar'
import x2 from '../../assets/x2.png'
import { NavLink ,Link,useHistory} from "react-router-dom";

import {signInWithEmailAndPassword}from 'firebase/auth'
import{auth} from '../../firebaseContext/auth'
import Logout from './Logout'
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
export default function  Login()
 {
const [email,setEmail]=useState("");

const[password,setPassword]=useState("");
const{user} =useContext(UserContext)

const history=useHistory();







const FindUser=async(e)=>{
e.preventDefault();
 const user=await signInWithEmailAndPassword(auth,email,password).then(()=>{

   setEmail("");
   setPassword("")
   history.push('/logout')
  })

}
  return (
     //----------------------------------------------------------------------
       <>
   {user?<Logout/>:
   <>
        <Navbar/>
  
    <div className=" row w-75">
 <div className="col "  >
   <img src={x2}
     width="50%" height="300px" alt="dd" 
     style={{position: 'relative',top:' 100px',left:'200px',}}/>

 </div>
   <div className="col   my-5  text-dark fw-bold ">
       <form className="shadow p-5 w-75  " onSubmit={(e)=>FindUser(e)}>
   <h2 style={{color: 'black',marginBottom:"40px", textAlign: 'center'}}>Login form</h2>

  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" value={email}
     className="form-control" placeholder=" Enter Email address" 
       onChange={(e)=>setEmail(e.target.value)}
     />

  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" value={password}
     className="form-control" placeholder="Password"
     onChange={(e)=>setPassword(e.target.value)}
     />

  </div>


  <div className="row mb-4">
    

    <div className="col">

      <NavLink to="/reset">Forgot password?</NavLink>
    </div>
  </div>


  <input type="submit" className="btn btn-outline-dark   mb-4" value='Sign in'/>
 

  <div className="text-center">
    <p>Not a member? <Link to="/register">Register</Link></p>
   
  </div>
</form>


   </div></div></>}</>
  )
}

