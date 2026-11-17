import "./Condect.css";

const Condect = () => {
  return (
    <>
      <div className="condect-main-con" id="condect">
        <div className="top">
          <section className="logo">
            <h2>LUMIÈRE</h2>
          </section>
          <span className="condect">
            <h2>Condect Us</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/anie_jr25">Instagram</a>
              </li>
              <li>
                <a href="https://x.com/?lang=en">Twitter</a>
              </li>
              <li>email</li>
            </ul>
          </span>
          <span className="support">
            <h2>Support</h2>
            <ul>
              <li>Customer Care </li>
              <li>Hepl</li>
              <li>FQL</li>
            </ul>
          </span>
          <span className="nav">
            <h2>NavBar</h2>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#product">Product</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#condect">Condect</a>
              </li>
            </ul>
          </span>
        </div>
        <div className="bottom">
          <p>©{new Date().getFullYear()} Lumière Glow. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Condect;
