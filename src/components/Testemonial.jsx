import React from "react";
import Banner from "./Banner";
import Carousel from "react-multi-carousel";
import { FaQuoteRight } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 2,
};

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
    <>
      <div className="container">
        <div className="flexbox-sty flex-dir spacing">
          <Banner header="What Bitly customers are saying" />
        </div>
        <Carousel {...carouselParams}>
          {items.map((item, index) => {
            return (
              <div key={index} className="test_item flex-dir">
                <div className="test_star">
                  <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2021/11/stars-quote-widget.png"
                    alt="star"
                  />
                </div>
                <span>
                  <FaQuoteRight className="test-icon" />
                </span>
                <h2>{item.text}</h2>
                <h5>{item.name}</h5>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Testemonial;
