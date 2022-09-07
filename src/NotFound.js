import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="work-con">
      <div>
        <img
          className="work-in-p"
          alt="work"
          src={require("./images/work.png")}
        />
        <h2>This page is not yet built. Dont come back.</h2>
        <Link to="/React-nike-project">
          <p> Click here to Go back home</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
