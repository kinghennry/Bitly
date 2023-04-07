import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Accordion({ title, answer, reasons, btns }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="accordion-item">
      <div className={`question ${showInfo ? "ques-active" : ""}`}>
        <FiChevronDown
          className={`icon ${showInfo ? "icon-active" : ""}`}
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        />
        <span className="question-text">{title}</span>
      </div>
      <div className="answer">
        {showInfo && answer && <p id="answer-text">{answer}</p>}

        {showInfo && reasons && (
          <>
            {reasons.map((item, index) => {
              return (
                <div key={index} className="reasons-div flex-dir">
                  <p>{item.reason}</p>
                </div>
              );
            })}
          </>
        )}
        {showInfo && btns && <p id="answer-btns">{btns}</p>}
      </div>
    </article>
  );
}

export default Accordion;
