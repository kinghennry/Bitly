import React from "react";
import Banner from "./Banner";

function Brand() {
  return (
    <section className="spacing">
      <div className="container">
        <div className="flexbox-sty flex-dir">
          <Banner header="Loved by big and small brands everywhere" />
        </div>
        <div className="brand-imgs">
          <div className="brand-img">
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/06/novasol.svg"
              alt="novals"
            />
          </div>
          <div className="brand-img">
            <img src="https://bit.ly/3nUtaFD" alt="novals" />
          </div>
          <div className="brand-img">
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/06/marriott.svg"
              alt="novals"
            />
          </div>
          <div className="brand-img">
            <img src="https://bit.ly/3mbqJOl" alt="novals" />
          </div>
          <div className="brand-img" id="hide">
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/06/electronic-arts.svg"
              alt="novals"
            />
          </div>
        </div>
        <div id="ea">
          <img
            src="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/06/electronic-arts.svg"
            alt="novals"
          />
        </div>
        <div className="hr" />
      </div>
    </section>
  );
}

export default Brand;
