import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../firebaseContext/auth";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [repeatePassword, setRepeatePassword] = useState("");
  const createUser = async (e) => {
    e.preventDefault();
    if (password === repeatePassword) {
    await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      ).then((user) => {
        
        updateProfile(auth.currentUser,{displayName:name,photoURL:null});
        history.push("/login");
      });
    } else {
      setErr("both passwords are not match");
    }
  };
  return (
    <>
         <Navbar/>
      <section className='vh-100 my-2 w-75 ms-5 '>
        <div className='container  '>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-lg-12 col-xl-11'>
              <div className='card text-black' style={{ borderRadius: "25px" }}>
                <div className='card-body p-md-5'>
                  <div className='row justify-content-center'>
                    <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                      <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                        Sign up
                      </p>

                      <form className='mx-1 mx-md-4' onSubmit={createUser}>
                        <div className='d-flex flex-row align-items-center mb-4'>
                          <h4 style={{ marginRight: "20px" }}>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                          </h4>
                          <div className='form-outline flex-fill mb-0'>
                            <input
                              type='text'
                              id='form3Example1c'
                              className='form-control'
                              placeholder='Your Name'value={name} onChange={(e)=>setName(e.target.value)} />
                       
                          </div>
                        </div>

                        <div className='d-flex flex-row align-items-center mb-4'>
                          <h4 style={{ marginRight: "20px" }}>
                            <FontAwesomeIcon
                              icon={faEnvelope}
                            ></FontAwesomeIcon>
                          </h4>
                          <div className='form-outline flex-fill mb-0'>
                            <input
                              type='email'
                              id='form3Example3c'
                              className='form-control'
                              placeholder='Your Email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className='d-flex flex-row align-items-center mb-4'>
                          <h4 style={{ marginRight: "20px" }}>
                            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                          </h4>
                          <div className='form-outline flex-fill mb-0'>
                            <input
                              type='password'
                              id='form3Example4c'
                              className='form-control'
                              placeholder='Password'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className='d-flex flex-row align-items-center mb-4'>
                          <h4 style={{ marginRight: "20px" }}>
                            <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                          </h4>
                          <div className='form-outline flex-fill mb-0'>
                            <input
                              type='password'
                              id='form3Example4cd'
                              className='form-control'
                              placeholder='Repeat your password'
                              value={repeatePassword}
                              onChange={(e) =>
                                setRepeatePassword(e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                          <input
                            type='submit'
                            className='btn btn-primary btn-lg'
                            value='Register'
                          />
                        </div>
                      </form>
                      <p>{err}</p>
                    </div>
                    <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                      <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                        className='img-fluid'
                        alt='Sample'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
