import "./Footer.css";
import Media from "react-media";
const Footer = () => {
  return (
    <footer>
      <h2 className="more">More Nike Products</h2>
      <div className="bar-con con">
        <img
          className="img-back"
          alt="footer"
          src={require("./images/footer.png")}
        />
        <article className="article last-article">
          <h2>YOUR NIKE MEMBERSHIP</h2>
          <p>Join our members and show your love with Nike By You!</p>
          <div>Join Us</div>
        </article>
      </div>
      <Media query="(min-width:650px)">
        {function (matches) {
          return matches ? (
            <div className="ukraine">
              <h2>Thanks for watching</h2>
              <h3> Glory to Ukraine</h3>
              <img
                src={require("./images/ukr.png")}
                alt="ukr"
                className="ukr"
              />
            </div>
          ) : (
            <div></div>
          );
        }}
      </Media>
      <div className="footer">
        <h3 className="one">ALL</h3>
        <h3 className="two">
          <a href="#Workout">WORKOUT</a>
        </h3>
        <h3 className="one">WOMEN</h3>

        <img
          className="footerLogo"
          alt="footer"
          src={require("./images/footerLogo.png")}
        />
        <h3 className="two">
          <a href="#run">RUN</a>
        </h3>
        <h3 className="one">MEN</h3>

        <h3 className="two">
          <a href="#football">FOOTBALL</a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
