import React, { useState } from "react";
import Banner from "./Banner";
// import "./FaQs.css";
import data from "./data";
import Accordion from "./Accordion";

function FAQs() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <div className="container">
        <div className="flexbox-sty flex-dir">
          <Banner header="Frequently asked questions" />
        </div>
        <div className="hr" style={{ marginTop: "35px " }} />

        <div className="accordion">
          {questions.map((question) => {
            return <Accordion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </>
  );
}

export default FAQs;
