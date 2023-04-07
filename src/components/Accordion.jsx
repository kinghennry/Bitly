import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Accordion({ title, answer }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="accordion-item">
      <div className="question">
        <FiChevronDown
          //   className={`icon ${showInfo ? "icon--active" : ""}`}
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        />
        <span className="question-text">{title}</span>
      </div>
      {/* <div className="answer">{showInfo && <p>{answer}</p>}</div> */}
    </article>
  );
}

export default Accordion;
