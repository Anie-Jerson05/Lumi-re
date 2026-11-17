import { useContext, useState } from "react";
import "../pages/Product.css";
import { IoAddCircleOutline, IoCheckmarkCircle } from "react-icons/io5";
import { Cart } from "./Cartcontext";
import { useNavigate } from "react-router-dom";

const Items = ({ val }) => {
  let [addCart, setAddCart] = useState(false);
  let { cartItam, setCartItam } = useContext(Cart);

  const handleAddCart = () => {
    const itemExist = cartItam.find((item) => item.id == val.id);
    if (!itemExist) {
       setCartItam((state) => [...state, val]);
    }

    setAddCart(true);
    setTimeout(() => {
      setAddCart(false);
    }, 2000);
  };

  let navigate = useNavigate();

  const goToProduct = (link) => {
    navigate(link)
  }

  return (
    <div className="con">
      <div className="img-con" onClick={() => goToProduct(`/product/${val.id}`)}>
        <img src={val.image[0]} alt={val.name} />
      </div>
      <div className="text-con">
        <span>
          <h2>{val.name}</h2>
          <p>{val.descriptions}</p>
          <h4>Rs: ₹{val.price}</h4>
        </span>
        <span className="icon" onClick={handleAddCart}>
          {addCart ? <IoCheckmarkCircle /> : <IoAddCircleOutline />}
        </span>
      </div>
    </div>
  );
};

export default Items;
