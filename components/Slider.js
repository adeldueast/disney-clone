import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-[1920px] mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;
