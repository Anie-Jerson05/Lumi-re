import NavBar from "./components/NavBar";
import NotFount from "./pages/NotFount";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cartcontext from "./components/Cartcontext";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import ViewProduct from "./components/ViewProduct";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <Cartcontext>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product/>} />
            <Route path="/product/:id" element={<ViewProduct />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </Router>
      </Cartcontext>
      <Toaster position="bottom-right"/>
    </>
  );
};

export default App;
