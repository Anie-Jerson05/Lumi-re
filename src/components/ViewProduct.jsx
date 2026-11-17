import "./ViewProduct.css";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Cart } from "./Cartcontext";
import toast from "react-hot-toast";

const ViewProduct = () => {
  let [itam, setItam] = useState({});
  let [selectedImg, setSelectedImg] = useState(0);
  let navigate = useNavigate();

  let param = useParams();
  let { id } = param;

  let { qty, setQty, cartItam, setCartItam } = useContext(Cart);

  const handleAddQty = () => {
    let currentQty = qty[itam.id] || 1;

    if (itam.stock > currentQty) {
      setQty((s) => ({
        ...s,
        [itam.id]: currentQty + 1,
      }));
    }
  };

  const handleSubQty = () => {
    let currentQty = qty[itam.id] || 1;

    if (currentQty > 1) {
      setQty((s) => ({
        ...s,
        [itam.id]: currentQty - 1,
      }));
    }
  };

  const handleBuy = () => {
    toast.success("Order Placed successfully..!");
    navigate("/");
    setQty({});
  };

  const handleAddCart = () => {
    const itemExist = cartItam.find((i) => i.id == itam.id);
    if (!itemExist) {
      setCartItam((state) => [...state, itam]);
      toast.success(" Product Added..!");
      navigate("/");
    }
  };

  async function getProducts() {
    let res = await axios.get(`http://localhost:4000/product/${id}`);
    // console.log(res.data);
    setItam(res.data);
  }

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <>
      <main>
        <div className="view-img-con">
          <img src={itam.image?.[selectedImg]} alt={itam.name} />
          <div className="small-img-con">
            {itam.image?.map((img, index) => (
              <div
                key={index}
                className="small-img"
                onClick={() => setSelectedImg(index)}
              >
                <img src={img} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="view-text-con">
          <span className="name-rating">
            <h2>{itam.name}</h2>
            <p>⭐{itam.rating}</p>
          </span>
          <p>{itam.descriptions}</p>
          <span className="view-rs">
            <h3>Rs: ₹{itam.price}</h3>
            <div className="view-but">
              <button onClick={handleSubQty}>
                <FaMinus />
              </button>
              <p>{qty[itam.id] || 1}</p>
              <button onClick={handleAddQty}>
                <MdAdd />
              </button>
            </div>
          </span>
          <div className="view-but2">
            <button onClick={handleBuy}>Buy Now</button>
            <button onClick={handleAddCart}>Add to cart</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ViewProduct;
