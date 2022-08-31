import "./Category.css";
const Catergory = () => {
  return (
    <div>
      <h2 className="buy">Buy by catergory</h2>
      <div>
        <div id="Workout" className="image-and-text-con">
          <img
            src={require("./images/yoga.png")}
            alt="workout"
            className="category-pic"
          />
          <div className="text-con">
            <h3>WORKOUT</h3>
          </div>
        </div>

        <div id="run" className="image-and-text-con">
          <img
            src={require("./images/run.png")}
            alt="run"
            className="category-pic"
          />
          <div className="text-con">
            <h3>RUN</h3>
          </div>
        </div>

        <div id="football" className="image-and-text-con">
          <img
            src={require("./images/football.png")}
            alt="football"
            className="category-pic"
          />
          <div className="text-con">
            <h3>FOOTBALL</h3>
          </div>
        </div>
      </div>
      <div className="good">
        <h2 className="looks">LOOKS GOOD.</h2>
        <h2 className="runs">RUNS GOOD.</h2>
        <h2 className="feels">FEELS GOOD.</h2>
      </div>
      <div className="last-con">
        <img
          src={require("./images/lastShoeOne.png")}
          alt="shoe"
          className="last lastShoeOne"
        />
        <img
          src={require("./images/lastShoeTwo.png")}
          alt="shoe"
          className="last lastShoeTwo"
        />
      </div>
    </div>
  );
};

export default Catergory;
