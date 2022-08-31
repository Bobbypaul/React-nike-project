import "./Heroes.css";
const Heroes = function () {
  return (
    <div>
      <div className="hero-con">
        <img
          className="plenty con"
          src={require("./images/plenty.png")}
          alt="plenty"
        />
        <div className="bar-con con blackback">
          <img
            className="img-background"
            src={require("./images/blackbar.png")}
            alt="blackbar"
          />
          <article className="article first-article">
            <h1>WE ARE NEVER DONE</h1>
            <p>
              Celebrating 50 years of Nike from May 16th! Exclusive products,
              experiences and much more await you for five days. Scan and join
              the Nike app!
            </p>
            <div>Celebrate with us</div>
          </article>
        </div>
      </div>
      <img
        className="rectangle con"
        src={require("./images/Rectangle.png")}
        alt="rectangle"
      />
      <div className="blue-con">
        <img className="blue" src={require("./images/blue.png")} alt="blue" />
        <img className="nike" src={require("./images/Vector.png")} alt="nike" />
      </div>
      <div className="newShoeCon">
        <img
          className="newShoeOne"
          src={require("./images/newShoeOne.png")}
          alt="new Shoe"
        />
        <img
          className="newShoeTwo"
          src={require("./images/newShoeTwo.png")}
          alt="new Shoe"
        />
      </div>
    </div>
  );
};

export default Heroes;
