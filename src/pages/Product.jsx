import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import Items from "../components/Items";

const Product = () => {
  let [product, setProduct] = useState([]);

  async function getData() {
    let res = await axios.get("http://localhost:4000/product");
    setProduct(res.data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="pro-con" id="product">
        <h2>― Made for your skin ―</h2>
        <div className="products">
          {product.map((val) => {
            return (
              <Items val={val} key={val.id}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
