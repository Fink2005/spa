import React, { useRef, useState } from "react";
import CarouselPage from "./CarouselPage";
import SpaPage from "./SpaPage";
import { Link, Element } from "react-scroll";
import { Dropdown, FloatButton } from "antd";
import { CommentOutlined, CalendarOutlined } from "@ant-design/icons";
export default function MainPage() {
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
    <div
      id="main-page"
      className="relative mb-custom"
      style={{ backgroundColor: "rgb(250,243,235)" }}
    >
      <CarouselPage />

      <SpaPage />
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
