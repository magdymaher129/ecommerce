import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../Navbar";
import {
  addItem,
  delItem,
  removeitem,
  totalItem,
  clearAll,
} from "../../reduxStore/createSlice";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
export default function Cart() {
  const { cartItem, price, qty } = useSelector((state) => state.update);
  const Items = JSON.parse(localStorage.getItem("cartItem"));
  const prices = JSON.parse(localStorage.getItem("price"));

  const dispatch = useDispatch();
  const handleaddItem = (x) => {
    dispatch(addItem(x));
  };
  const handledelItem = (x) => {
    dispatch(delItem(x));
  };
  const handleremoveItem = (x) => {
    dispatch(removeitem(x));
  };

  useEffect(() => {
    dispatch(totalItem());
  }, [ cartItem, qty]);

  return (
    <>
    <Navbar/>
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
            {Items  && Items.map((item) => {
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
                  <td style={{ paddingTop: "50px" }}>{item.cartquanaty}</td>
                  <td style={{ paddingTop: "50px" }}>
                    $ {(item.cartquanaty * item.price).toFixed(2)}
                  </td>
                  <td style={{ paddingTop: "30px" }}>
                    <button
                      className='btn btn-outline-dark mx-1'
                      onClick={() => handleaddItem(item)}
                    >
                      +
                    </button>{" "}
                    <button
                      className='btn btn-outline-dark mx-1'
                      onClick={() => handledelItem(item)}
                    >
                      -
                    </button>
                    <button
                      className='btn btn-danger mx-1'
                      onClick={() => handleremoveItem(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {Items.length < 1 ? (
          <h2 className='text-center'> No items selected </h2>
        ) : (
          <div className=' mx-5 d-flex justify-content-between'>
            <p className='fw-bold fs-4'> Total= ${prices}</p>
            <div className=' d-flex  '>
              <button className=' btn btn-outline-dark mx-1'> Buy Now </button>
              <button
                className=' btn btn-danger px-4'
                onClick={() => dispatch(clearAll())}
              >
                {" "}
                Clear
              </button>
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
}
