import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/images/Slider/slider1_w.jpg";
import image2 from "../../assets/images/Slider/slider2_w.jpg";
import image3 from "../../assets/images/Slider/slider3_w.jpg";

const CarouselBanner = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={3000}
      >
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
