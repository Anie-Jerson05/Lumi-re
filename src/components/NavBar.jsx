import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import "./NavBar.css";
import { useContext, useState } from "react";
import { Cart } from "./Cartcontext";

const NavBar = () => {
  let [isActive, setIsActive] = useState("home");
  let [sideBar, setSideBar] = useState(false);
  let { cartItam, setCartItam } = useContext(Cart);

  let navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
    setIsActive("");
  };

  return (
    <>
      <nav className="mobile-nav">
        <div
          className={sideBar == true ? "side-bar-mob" : "remove-side-bar-mob"}
        >
          <ul>
            <li onClick={() => setSideBar(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setSideBar(false)}>
              <a href="#product">Product</a>
            </li>
            <li onClick={() => setSideBar(false)}>
              <a href="#about">About</a>
            </li>
            <li onClick={() => setSideBar(false)}>
              <a href="#condect">Condact</a>
            </li>
          </ul>
          <span onClick={() => setSideBar(false)}>
            <IoClose />
          </span>
        </div>
        <span className="mobile-sec">
          <div className="menu-bar-mob">
            <button onClick={() => setSideBar(true)}>
              <IoMenu />
            </button>
          </div>
          <div className="logo-mob">
            <h2>
              <Link to="/">LUMIÈRE</Link>
            </h2>
            <h5>
              <Link to="/">SKINCARE</Link>
            </h5>
          </div>
          <div className="cart-mob">
            {cartItam.length == 0 ? (
              ""
            ) : (
              <span>
                <p>{cartItam.length}</p>
              </span>
            )}
            <button onClick={handleCart}>
              <HiOutlineShoppingBag />
            </button>
          </div>
        </span>
      </nav>

      <nav className="lap-nav">
        <div className="logo-lap">
          <h2 onClick={() => setIsActive("home")}>
            <Link to="/">LUMIÈRE</Link>
          </h2>
          <h5 onClick={() => setIsActive("home")}>
            <Link to="/">SKINCARE</Link>
          </h5>
        </div>
        <div className="navlist-lap">
          <ul>
            <li
              className={isActive == "home" ? "li-click" : ""}
              onClick={() => setIsActive("home")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={isActive == "product" ? "li-click" : ""}
              onClick={() => setIsActive("product")}
            >
              <Link to="/product">Product</Link>
            </li>
            <li
              className={isActive == "about" ? "li-click" : ""}
              onClick={() => setIsActive("about")}
            >
              <a href="/#about">About</a>
            </li>
            <li
              className={isActive == "condect" ? "li-click" : ""}
              onClick={() => setIsActive("condect")}
            >
              <a href="/#condect">Condact</a>
            </li>
          </ul>
        </div>
        <div className="search-bar-lap">
          {cartItam.length == 0 ? (
            ""
          ) : (
            <span>
              <p>{cartItam.length}</p>
            </span>
          )}
          <button onClick={handleCart}>
            <HiOutlineShoppingBag />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
