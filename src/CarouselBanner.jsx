import React from "react";

// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Carousel } from "react-bootstrap";
import img1 from "./assets/Thumb-hinh-nen-dep-nhat-the-gioi.jpg";
import img2 from "./assets/Hinh-nen-may-tinh-toi-gian-800x45011111111111111111111111.jpg";
import img3 from "./assets/Hinh-nen-may-tinh-4K-toi-gian.jpg";

function CarouselBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;
