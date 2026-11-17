import "./Cart.css";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { TbTrashXFilled } from "react-icons/tb";
import { useContext, useState } from "react";
import { Cart } from "./Cartcontext";

const CartItems = ({ val, qty, setQty }) => {
  let { cartItam, setCartItam } = useContext(Cart);

  const handleAddQty = () => {
    if (val.stock > qty) {
      setQty((s) => ({
        ...s,
        [val.id]: qty + 1,
      }));
    }
  };

  const handleDel = () => {
    setCartItam((prev) => prev.filter((item) => item.id !== val.id));
    setQty((prev) => {
      const updatedQty = { ...prev };
      delete updatedQty[val.id];
      return updatedQty;
    });
  };

  const handleSubQty = () => {
    if (qty > 1) {
      setQty((s) => ({
        ...s,
        [val.id]: qty - 1,
      }));
    }
  };

  return (
    <>
      <div className="cart-products-con">
        <span className="cart-img">
          <img src={val.image[0]} alt="" />
        </span>
        <span className="cart-text">
          <span>
            <h2>{val.name}</h2>
            <h3>Rs: ₹{val.price}</h3>
          </span>
          <div className="button-con">
            <button onClick={handleSubQty}>
              <FaMinus />
            </button>
            <p>{qty}</p>
            <button onClick={handleAddQty}>
              <MdAdd />
            </button>
            <button onClick={handleDel}>
              <TbTrashXFilled />
            </button>
          </div>
        </span>
      </div>
    </>
  );
};

export default CartItems;
