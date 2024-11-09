import React from "react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  let navigate = useNavigate();
  return (
    <div id="header">
      <div className="flex justify-between px-5  w-full z-10">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="w-20"
        >
          <img src="/assets/imgCarousel/logo.jpg" alt="" />
        </div>
        <nav className="flex items-center ">
          <div className="w-8">
            <a href="https://www.facebook.com/profile.php?id=100092274255797">
              <img src="/assets/imgCarousel/facebook.png" alt="" />
            </a>
          </div>
          <div className="w-8 ms-2">
            <a href="https://zalo.me/0869244686">
              <img
                src="/assets/imgCarousel/zalo.png
            "
                alt=""
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
