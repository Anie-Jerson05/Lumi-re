import "./Cart.css";
import { useContext, useState } from "react";
import { Cart as Itams } from "./Cartcontext";
import CartItems from "./CartItems";
import empty from "../assets/empty.png";
import toast from "react-hot-toast";

const Cart = () => {
  let { cartItam, setCartItam, qty, setQty } = useContext(Itams);
  
console.log(qty)

  let total = cartItam.reduce(
    (acc, val) => acc + val.price * (qty[val.id] || 1),
    0,
  );

  let totalPro = cartItam.reduce((acc, val) => acc + (qty[val.id] || 1), 0);

  const handleTost = () => {
    toast.success("Order Placed successfully..!");
    setCartItam([]);
    setQty({});
  }
  

  return (
    <>
      <main>
        <div className="cart-main">
        <h2>Cart</h2>
          {cartItam.map((val) => {
            return (
              <CartItems
                val={val}
                qty={qty[val.id] || 1}
                setQty={setQty}
                key={val.id}
              />
            );
          })}
        </div>
        {cartItam.length == 0 ? (
          <div className="empty-cart">
            <img src={empty} alt="" />
            <h2>Your cart is Empty</h2>
          </div>
        ) : (
          <div className="cart-total-con">
            <h3>Price Details</h3>
            <h4>Items: {totalPro}</h4>
            <h4>Total Price: ₹{total}</h4>
            <button onClick={handleTost}>Place Order</button>
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
