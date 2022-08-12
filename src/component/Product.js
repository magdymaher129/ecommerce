import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { addItem } from "../reduxStore/createSlice";
import { useDispatch } from "react-redux";
import { useCart } from "react-use-cart";

export default function Product() {
  const { addItem } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  // const dispatch = useDispatch();

  const handleaddItem = (item) => {
    addItem(item);
    history.push("/cart");
  };
  const Load = () => {
    return (
      <>
        {" "}
        <h1> Loading....</h1>
      </>
    );
  };

  const showProduct = () => {
    return (
      <>
        <div className='col-md-6'>
          <img
            src={product.image}
            alt={product.title}
            style={{
              height: "600px",
              width: "90%",
              border: "1px solid grey",
              padding: "40px",
            }}
          />
        </div>
        <div className='col-md-6'>
          <h3>{product.title}</h3>
          <h5 className='display-6 fw-bold mt-4'>Price: ${product.price}</h5>
          <h4 className='display-7 fw-bold mt-3'>Description :</h4>
          <p className='lead-5 fs-5 my-2'>{product.description}</p>
          <div style={{ PaddingBottom: "10px" }} className='my-4'>
            <Link to='/carts' className='btn btn-outline-dark mx-1'>
              Go to cart
            </Link>
            <Link
              to='/cart'
              className='btn btn-outline-dark'
              onClick={() => handleaddItem(product)}
            >
              Add to cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className='container'>
        <div className='row'>{loading ? <Load /> : showProduct()}</div>
      </div>
    </>
  );
}
