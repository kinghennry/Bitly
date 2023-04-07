import React from "react";

function Stats() {
  const details = [
    {
      number: "500K",
      stat: "global paying customers",
    },
    {
      number: "5.7M",
      stat: "monthly active users",
    },
    { number: "256M", stat: "links & QR codes created monthly" },
    { number: "10B", stat: "connections (clicks & scans) monthly" },
    { number: "800+", stat: "app integrations" },
  ];
  return (
    <>
      <div className="container">
        <div className="stats flex spacing">
          <div className="stats-img">
            <img src="https://bit.ly/3K9UlU0" alt="globe" />
          </div>
          <div className="stats-details">
            {details &&
              details.map((item, index) => {
                return (
                  <div key={index} className="stat-item flex-sty">
                    <article>
                      <h1>{item.number}</h1>
                    </article>
                    <section>
                      <h3 className="para-sty">{item.stat}</h3>
                    </section>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="hr" />
      </div>
    </>
  );
}

export default Stats;
