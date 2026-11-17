import "./About.css";

const About = () => {
  return (
    <>
      <div className="main-con" id="about">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Lumière was created with one simple belief: everyone deserves to
            feel confident in their own skin. We believe beauty is not about
            having perfect skin. It is about understanding your skin, caring for
            it, and giving it the attention it deserves.
          </p>
        </div>
        <div className="product">
          <h2>Our Product</h2>
          <p>
            Our brand brings together simplicity, elegance, and everyday
            skincare essentials. From gentle cleansers to nourishing
            moisturizers and refreshing serums, our collection is designed to
            make skincare feel less complicated and more enjoyable.
          </p>
          <a href="#product"><button>SHOP NOW</button></a>
        </div>
      </div>
    </>
  );
};

export default About;
