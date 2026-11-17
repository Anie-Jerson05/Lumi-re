import Hero from "../components/Hero";
import Product from "./Product";
import About from "./About";
import Condect from "./Condect";
import Cartcontext from "../components/Cartcontext";

const Home = () => {
  return (
    <>
      <span id="home">
        <Hero />
        <Product />
        <About />
        <Condect />
      </span>
    </>
  );
};

export default Home;
