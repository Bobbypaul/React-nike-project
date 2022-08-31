import "./Slide.css";
const Slide = () => {
  return (
    <div>
      <article className="second-article">
        <p>At the moment</p>
        <h2>SUMMERTIME MOOD</h2>
        <p>Fight the heat in a sunny look!</p>
      </article>
      <div>
        <div className="slide-headers">
          <h2>Top Sneakers</h2>
          <div className="arrow-con">
            <svg
              className="left-arrow arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {/*Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License)*/}
              <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" />
            </svg>
            <svg
              className="right-arrow arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
              <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
            </svg>
          </div>
        </div>

        <div className="sidee-con">
          <img
            alt="first-slide"
            className="first-slide slidee"
            src={require("./images/firstSlide.png")}
          />
          <img
            alt="second-slide"
            className="second-slide slidee"
            src={require("./images/secondSlide.png")}
          />
          <img
            alt="third-slide"
            className="third-slide slidee"
            src={require("./images/thirdSlide.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
