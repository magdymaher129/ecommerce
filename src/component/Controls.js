import React from "react";

export default function Controls(props) {
  return (
    <>
      <div className='buttons d-flex  justify-content-center mb-4 '>
        <button
          className='btn btn-outline-dark px-4 me-2 fw-bold '
          onClick={() => props.all()}
        >
          ALL
        </button>
        <button
          className='btn btn-outline-dark px-2 me-2 fw-bold'
          onClick={() => props.filter(props.women)}
        >
          WOMEN'S Clothing
        </button>
        <button
          className='btn btn-outline-dark px-2 me-2 fw-bold'
          onClick={() => props.filter(props.men)}
        >
          MEN'S Clothing
        </button>
        <button
          className='btn btn-outline-dark px-2 me-2 fw-bold'
          onClick={() => props.filter(props.electronics)}
        >
          ELECTRONICS
        </button>
        <button
          className='btn btn-outline-dark px-2 me-2 fw-bold'
          onClick={() => props.filter(props.jewelery)}
        >
          Jewelery
        </button>
      </div>
    </>
  );
}
