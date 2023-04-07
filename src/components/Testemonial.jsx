import React from "react";
import Banner from "./Banner";

function Testemonial() {
  const items = [
    {
      id: 1,
      text: "Our goal was to implement a system that would not interrupt the gameplay experince when a new update was announced, and we found QR Codes to be the perfect answer",
      name: "Juan Zacarias – Game Product Manager, Motive Studios EA",
    },
    {
      id: 2,
      text: "Bitly is user-friendly and accessible. It’s the one-stop-shop for all link-associated things.",
      name: "Jashima W. – Founder, Ode Brand & Marketing Consultancy",
    },
    {
      id: 3,
      text: "The more I use Bitly, the more valuable it becomes to me. It cuts my time down because it saves all my information, and it gives me insight into which links are most popular and have the most clicks.",
      name: "Mary H. – YouTube Influencer",
    },
    {
      id: 4,
      text: "We found QR Code Generator an easy platform to use and integrate with our information delivery process. We find the system allows fast editing and design that enables us to deliver updated information quickly. Our online delivery of rich, multimedia content is made easy by our partnership with QR Code Generator, and sets out a new, green way forward in tourism.",
      name: "Frank Willoughby – Owner, Downtown City Maps",
    },
    {
      id: 5,
      text: "Bitly has enabled us to build trust with clients by giving them branded short links that carry the main message of the link and that carries our brand. Bitly also gives us data analytics on who is clicking our links which helps us carry the clients forward in the advertising process.",
      name: "Thankdeka M. – Project Manager",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="flexbox-sty flex-dir spacing">
          <Banner header="What Bitly customers are saying" />
        </div>
      </div>
    </div>
  );
}

export default Testemonial;
