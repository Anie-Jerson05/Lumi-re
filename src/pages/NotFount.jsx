import { Link } from "react-router-dom";
import "./NotFount.css";

const NotFount = () => {
  return (
    <div className="not-con">
      <span>
        <h2>LUMIÈRE</h2>
      </span>
      <span className="not">
        <h2>PAGE NOT FOUND</h2>
        <p>We're sorry, the page you are looking for not done exist</p>
        <Link to="/">
          <h5>RETURN TO HOME ➔</h5>
        </Link>
      </span>
    </div>
  );
};

export default NotFount;
