import React, { useState } from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
export default function CarouselPage() {
  // let handleShowAddress = () => {
  //   setAddress((item) => !item);
  // };
  // const [address, setAddress] = useState(false);
  let navigate = useNavigate();
  return (
    <div className="mb-16">
      <div className="relative">
        <div className="h-[310px] md:h-full  overflow-hidden">
          <img
            className="object-cover  w-full h-full  object-center"
            src="/assets/imgCarousel/pic1.png"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            navigate("/Menu");
          }}
          className="absolute top-1 right-1 md:right-32 cursor-pointer hover:scale-150 transition"
        >
          <p className="text-sm md:text-lg text-customGreen me-3">Menu</p>
        </div>
      </div>
    </div>
  );
}
