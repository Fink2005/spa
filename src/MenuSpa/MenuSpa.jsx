import React, { useState } from "react";
import { FloatButton } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
export default function MenuSpa() {
  const [open, setOpen] = useState(false);
  let handleToCall = () => {
    // 0869 244 686
    window.location.href = "tel:+84869244686";
  };
  let handleToZalo = () => {
    window.location.href = "https://zalo.me/0869244686";
  };
  let handleToFaceBook = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Try to open Messenger app on mobile
      window.location.href =
        "https://www.facebook.com/profile.php?id=100092274255797";
    } else {
      // Open Messenger web on desktop
      window.location.href =
        "https://www.facebook.com/profile.php?id=100092274255797";
    }
  };
  return (
    <div>
      <div className="relative mb-16">
        <div className="h-[310px] md:h-full  overflow-hidden">
          <img
            className="object-cover  w-full h-full  object-center"
            src="/assets/imgCarousel/pic1.png"
            alt=""
          />
        </div>
        <p className="text-3xl md:text-5xl text-customGreen2 font-semibold text-center py-5">
          Menu Vi Tiên Cát
        </p>
        <div className="flex justify-center flex-col items-center">
          <div className=" rounded-xl relative h-full w-[350px] sm:w-[650px]  md:w-[700px]">
            <img
              width="100%"
              height="100%"
              className="opacity-70 h-full object-center  object-cover"
              src="/assets/imgBody/goi-dau.jpg"
              alt="menu"
            />
          </div>
          <div className=" rounded-xl relative h-full w-[350px] sm:w-[650px]  md:w-[700px]">
            <img
              width="100%"
              height="100%"
              className="opacity-70 h-full object-center  object-cover"
              src="/assets/imgBody/bodyNew.png"
              alt="menu"
            />
          </div>
          <div className=" rounded-xl relative h-full w-[350px] sm:w-[650px]  md:w-[700px]">
            <img
              width="100%"
              height="100%"
              className="opacity-70 h-full object-center  object-cover"
              src="/assets/imgBody/tongHop1.png"
              alt="menu"
            />
          </div>
          <div className=" rounded-xl relative h-full w-[350px] sm:w-[650px]  md:w-[700px]">
            <img
              width="100%"
              height="100%"
              className="opacity-70 h-full object-center  object-cover"
              src="/assets/imgBody/trietLong.png"
              alt="menu"
            />
          </div>
          <div className=" rounded-xl relative h-full w-[350px] sm:w-[650px]  md:w-[700px]">
            <img
              width="100%"
              height="100%"
              className="opacity-70 h-full object-center  object-cover"
              src="/assets/imgBody/noi-mi.png"
              alt="menu"
            />
          </div>
          <div className=" rounded-xl relative h-full w-[350px] sm:w-[650px]  md:w-[700px]">
            <img
              width="100%"
              height="100%"
              className="opacity-70 h-full object-center  object-cover"
              src="/assets/imgBody/nail-tongHop.png"
              alt="menu"
            />
          </div>
          <div className=" rounded-xl relative h-full w-[350px] sm:w-[650px]  md:w-[700px]">
            <img
              width="100%"
              height="100%"
              className="opacity-70 h-full object-center  object-cover"
              src="/assets/imgBody/treatment-menu.png"
              alt="menu"
            />
          </div>
          <div className=" rounded-xl relative h-full w-[350px] sm:w-[650px]  md:w-[700px]">
            <img
              width="100%"
              height="100%"
              className="opacity-70 h-full object-center  object-cover"
              src="/assets/imgBody/tamMenu.png"
              alt="menu"
            />
          </div>
        </div>
      </div>
      <FloatButton.BackTop />

      <FloatButton.Group
        open={open}
        placement="top"
        shape="circle"
        onClick={() => {
          setOpen((value) => !value);
        }}
        trigger="click"
        style={{
          insetInlineEnd: 88,
        }}
        icon={<CalendarOutlined />}
      >
        <FloatButton
          onClick={handleToCall}
          icon={<i class="fa fa-phone text-yellow-500"></i>}
        />
        <FloatButton
          onClick={handleToZalo}
          icon={<img src="/assets/imgCarousel/zalo.png" alt="" />}
        />
        <FloatButton
          onClick={handleToFaceBook}
          icon={<i class="fab fa-facebook text-blue-500"></i>}
        />
      </FloatButton.Group>
    </div>
  );
}
