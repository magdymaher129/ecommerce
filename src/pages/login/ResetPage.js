import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import img from "../../assets/shop.jpg";
import { auth } from "../../firebaseContext/auth";
import { useHistory,Redirect } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPage = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");

  const reset = (e) => {
    e.preventDefault();
    if (email) {
      sendPasswordResetEmail(auth, email).then(function () {
          setMessage(" Email has been sent to you ,please check and verify ")
          setEmail("");
        });
    } else {
        setErr("Pleae Enter Email Address !!");
    }

};
  return (
    <>
         <Navbar/>
      <div
        style={{
          margin: "100px 400px",
          border: "1px solid grey",
          padding: "20px",
        }}
      >
        <div style={{ padding: "10px" }}></div>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 '>
              <img src={img} alt='ss' width='100%' height='320px' />
            </div>
            <div class='col-md-4 '>
              <div class='panel panel-default'>
                <div class='panel-body'>
                  <div class='text-center'>
                    <h3>
                      <i class='fa fa-lock fa-4x'></i>
                    </h3>
                    <h2 class='text-center'>Forgot Password?</h2>
                    <p>You can reset your password here.</p>
                    <div class='panel-body'>
                      <form
                        id='register-form'
                        role='form'
                        autocomplete='off'
                        class='form'
                       
                        onSubmit={(e) => reset(e)}
                      >
                        <div class='form-group'>
                          <div class='input-group'>
                            <span class='input-group-addon'>
                              <i class='glyphicon glyphicon-envelope color-blue'></i>
                            </span>
                            <input
                              id='email'
                              name='email'
                              placeholder='email address'
                              class='form-control'
                              type='email' value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class='form-group'>
                          <input
                            name='recover-submit'
                            class='btn btn-lg btn-primary btn-block my-4'
                            value='Reset Password'
                            type='submit'
                          />
                        </div>

                        <input
                          type='hidden'
                          class='hide'
                          name='token'
                          id='token'
                          value=''
                        />
                      </form>
                      <p>{err?err:message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ResetPage;
