import shop from "../assets/shop.jpg";
import "../App.css";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Login from "../pages/login/Login";

const Card = () => {

  return (
    <>
    
    
        <>
          <div className='hero'>
            <div className='card  text-white '>
              <img
                src={shop}
                className='card-image '
                alt='title'
                height='650px'
                width='100%'
              />
              <div className='card-img-overlay d-flex flex-column justify-content-space'>
                <div className='container text-danger  '>
                  <h5 className='card-title display-2 fw-bolder mb-0  '>
                    NEW Brands{" "}
                  </h5>
                  <p className='card-text lead fs-2 text-dark fw-bold'>
                    CHECK ALL NEW PRODUCTS
                  </p>
                  <p className='card-text  text-dark fw-bold'>
                    Last updated 3 mins ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
     
    </>
  );
};
export default Card;
