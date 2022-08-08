import { Fragment,useContext } from "react";
import Navbar from '../../component/Navbar'
import x2 from '../../assets/x2.png'
import { UserContext } from "../../context/userContext";
import {signOut}from 'firebase/auth'
import{auth} from '../../firebaseContext/auth'
import { useHistory} from "react-router-dom";
const   Logout=()=>
{
  const{user} =useContext(UserContext)
  const history=useHistory()
  const out=()=>{
    signOut(auth);
    history.push('/login')
  }
  return (
       //----------------------------------------------------------------------
    <Fragment>
      <Navbar/>
    <div className=" row w-75">
 <div className="col "  >
   <img src={x2}
     width="50%" height="300px" alt="dd" 
     style={{position: 'relative',top:' 100px',left:'200px',}}/>

 </div>
   <div className="col   my-5  text-dark fw-bold " style={{position: 'relative',top:' 100px',left:'200px',}}>
     <h2>welcome <span style={{color:'#e078e0' ,}}>{user.displayName}</span></h2>
     <h2>Email: <span style={{color:'#e078e0' ,}}>{user.email}</span></h2>
<button className="btn btn-primary px-5 mx-4 fw-bold" onClick={out}>LOGOUT</button>
   </div></div></Fragment>
  )
}
export default Logout;

