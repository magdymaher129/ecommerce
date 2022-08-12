import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Navbar";
import {useCart}from 'react-use-cart'
import {
  addItem,
  delItem,
  removeitem,
  totalItem,
  clearAll,
} from "../reduxStore/createSlice";

const Cart = () => {
  const {addItem,delItem,clearAll,updateItemQuantity,items,cartTotal,removeItem,emptyCart}=useCart()
 
  // const { cartItem } = useSelector((state) => state.cartItem);

  // const { cartItem, qty } = useSelector((state) => state.update);
  // const Items = JSON.parse(localStorage.getItem("cartItem"));
  // const prices = JSON.parse(localStorage.getItem("price"));

  // const dispatch = useDispatch();

  // const handledelItem = (x) => {
  //   // dispatch(delItem(x));
  // };
  // const handleremoveItem = (x) => {
  //   // dispatch(removeitem(x));
  // };

  // useEffect(() => {
  //   dispatch(totalItem());
  // }, [dispatch]);

  return (
    <div>
      <Navbar />
   
      <div className='container px-5'>
        <h3 className='text-center mt-5'> Cart Info</h3>
        <table className='table table-hover my-5 border'>
          <thead>
            <tr className='fw-bold text-left'>
              <th
                scope='col'
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              ></th>

              <th
                scope='col'
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                TITLE
              </th>
              <th
                scope='col'
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                PRICE
              </th>
              <th
                scope='col'
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                Quntaty
              </th>
              <th
                scope='col'
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                TOTAL PRICE
              </th>
              <th
                scope='col'
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => {
                return (
                  <tr
                    className='fw-bold text-left py-2'
                    style={{ color: "grey" }}
                    key={item.id}
                  >
                    <td className='px-4'>
                      <img
                        src={item.image}
                        alt={item.title}
                        height='80px'
                        width='80px'
                      />
                    </td>

                    <td style={{ paddingTop: "50px" }}>
                      {item.title.substring(0, 35)}...
                    </td>
                    <td style={{ paddingTop: "50px" }}>$ {item.price}</td>
                    <td style={{ paddingTop: "50px" }}>{item.quantity }</td>
                    <td style={{ paddingTop: "50px" }}>
                      $ {(item.quantity * item.price).toFixed(2)}
                    </td>
                    <td style={{ paddingTop: "30px" }}>
                      <button
                        className='btn btn-outline-dark mx-1'
                        onClick={() => updateItemQuantity(item.id, item.quantity  + 1)}
                      >
                        +
                      </button>{" "}
                      <button
                        className='btn btn-outline-dark mx-1'
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <button
                        className='btn btn-danger mx-1'
                        onClick={() =>removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {items.length<0 ? (
          <h2 className='text-center'> No items selected </h2>
        ) : (
          <div className=' mx-5 d-flex justify-content-between'>
            <p className='fw-bold fs-4'> Total= ${cartTotal.toFixed(2)}</p>
            <div className=' d-flex  '>
              <button className=' btn btn-outline-dark mx-1'> Buy Now </button>
              <button
                className=' btn btn-danger px-4'
                onClick={emptyCart}
              >
                {" "}
                Clear
              </button>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
