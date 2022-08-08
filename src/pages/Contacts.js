import React from "react";
import Footer from "../component/Footer";

import Navbar from "../component/Navbar";

export default function Contacts() {
  return (
    <>
      <Navbar/>
    <header style={{display:'grid',gridTemplateColumns:'3fr 2fr',marginTop:'40px',gridGap:'20px'}}>
<section class="mb-4  ps-5 py-5" style={{marginLeft:'5%',backgroundColor:'#f2f2f2'}}>

   
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Us</h2>
  
   
        

    <div class="row">

   
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

             
                <div class="row">

                 
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
            

                  
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                  

                </div>


      
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
          
                <div class="row">

                 
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
           

            </form>

            <div class="text-center text-md-left">
                <a href="/" className="btn btn-primary px-4" >Send</a>
            </div>
            <div class="status"></div>
        </div>
    

     
       

    </div>

</section>
<section>
<dev>

    <h2>Topics</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem officia natus possimus magnam adipisci quas et tenetur obcaecati atque quo nisi rerum itaque aperiam qui necessitatibus minima corporis, fugiat illo?</p>
    <h2>Details</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem officia natus possimus magnam adipisci quas et tenetur obcaecati atque quo nisi rerum itaque aperiam qui necessitatibus minima corporis, fugiat illo?</p>
    <h2>Aspects</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem officia natus possimus magnam adipisci quas et tenetur obcaecati atque quo nisi rerum itaque aperiam qui necessitatibus minima corporis, fugiat illo?</p>
</dev>
</section></header>

    </>
  );
}
