import React from "react";

function Banner({ header, lightFnt, btn, white, text }) {
  return (
    <>
      <h1
        className={
          white ? "wte-text pb-4 header-sty text-ct" : "header-sty text-ct"
        }
      >
        {header}
      </h1>
      {text && <p className="para-sty banner-text text-ct">{text}</p>}
      {btn && (
        <button className={lightFnt ? "btn-sty bnr-btn" : "btn-sty "}>
          {btn}
        </button>
      )}
    </>
  );
}

export default Banner;
