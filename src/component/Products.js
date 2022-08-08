import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Controls from "./Controls";
import { getProductss } from "../reduxStore/createSlice";
import ProductsItems from "./ProductsItems";
import { Fragment } from "react";
import Navbar from "./Navbar";
  //----------------------------------------------------------------------






export default function Products() {
  const [given, setGiven] = useState([]);
  //---------------------------Store--------------------------------------
  const { products, isloading } = useSelector((state) => state.update);

  //---------------------------Store--------------------------------------

  const dispatch = useDispatch();
  //---------------------------on Updata--------------------------------------
  useEffect(() => {
    dispatch(getProductss());
  }, [dispatch]);
  useEffect(() => {
    setGiven(products);
  }, [products]);

  //---------------------------on Updata--------------------------------------
  //---------------------------logic------------------------------------------
  function filterProduct(cat) {
    const gg = products.filter((x) => x.category === cat);

    setGiven(gg);
  }

  const AllProduct = (e) => {
    return setGiven(products);
  };

  const Load = () => {
    return (
      <>
    
        <h1> Loading....</h1>
      </>
    );
  };
  //---------------------------logic------------------------------------------
  //---------------------------UI-----------------------------------------------
  return (
    <>


    <div className='container-fluid   mt-4'>

      {isloading ? (
        <Load />
      ) : (
        <Fragment>
          <Controls
            all={AllProduct}
            filter={filterProduct}
            men={"men's clothing"}
            women={"women's clothing"}
            electronics={"electronics"}
            jewelery={"jewelery"}
          />
          <div className='row '>
            {given &&
              given.map((x) => {
                return (
                  <Fragment key={x.id}>
                    <ProductsItems
                      title={x.title}
                      image={x.image}
                      desc={x.description}
                      price={x.price}
                      id={x.id}
                    />
                  </Fragment>
                );
              })}
          </div>
        </Fragment>
      )}
    </div>
    </>
  );
}
//---------------------------UI-----------------------------------------------
