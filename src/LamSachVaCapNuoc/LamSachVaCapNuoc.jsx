import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FloatButton } from "antd";

import { CommentOutlined, CalendarOutlined } from "@ant-design/icons";

export default function LamSachVaCapNuoc() {
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
      style={{
        backgroundColor: "rgb(8,42,35)",
      }}
    >
      <div className="relative hidden md:block">
        <img src="/assets/imgComboSpa/spa-banner2.png" alt="" />
        <div
          className="absolute  w-full h-full top-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(32, 41, 58, 0.5) 0%, rgba(32, 41, 58, 0) 19.42%), linear-gradient(90deg, rgba(32, 41, 58, 0.3) 0%, rgba(32, 41, 58, 0) 100%)",
          }}
        ></div>
        <div className="2xl:text-5xl text-3xl top-1/4 absolute text-amber-200 font-thin uppercase left-1/4">
          <p>Chăm sóc da</p>
          <p className="text-white  font-thin uppercase py-2">
            không chỉ đơn thuần{" "}
          </p>
          <p>là làm đẹp </p>
          <p className=" font-thin text-white  py-2"> mà còn là cách</p>
          <p>bạn thể hiện sự quý trọng </p>
        </div>
      </div>
      <div className="py-5 ps-5">
        <NavLink to="/" className="text-white font-thin text-lg">
          Trang chủ
        </NavLink>
        <i class="fa fa-angle-right text-white mx-2"></i>
        <NavLink to="/Menu" className="text-white font-thin text-lg">
          Menu
        </NavLink>
      </div>
      <hr />
      <div className="flex flex-col items-center m-5">
        <div className="my-10">
          <img
            src="https://images-1.eucerin.com/~/media/eucerin/local/vn/cham-soc-da-chuyen-sau/cham-soc-da-chuyen-sau-9.jpg?la=vi-vn"
            alt=""
          />
        </div>
        <div>
          <p className="md:text-3xl text-xl text-amber-100">
            CHĂM SÓC LÀM SẠCH VÀ CẤP NƯỚC CHUYÊN SÂU
          </p>
          <ul className="my-4">
            <li className="text-white text-lg font-extralight">
              Thời gian: 90 phút
            </li>
            <li className="text-white text-lg font-extralight">
              Giá sản phẩm Nhật 250k{" "}
            </li>
            <li className="text-white text-lg font-extralight">
              {" "}
              Giá sản phẩm Cao Cấp Hàn 350k{" "}
            </li>
          </ul>
          <p className="text-white w-full md:w-[700px]">
            "Làm sạch và cấp ẩm là bước nền tảng trong hành trình làm đẹp, giúp
            làn da luôn căng mịn, săn chắc và duy trì nét thanh xuân."
          </p>
          <p className="text-amber-200 my-5">Quy trình thực hiện:</p>
          <div class="text-white">
            <div class="mb-6 text-xl">
              <h3 class="text-2xl font-semibold  text-amber-200 mb-4">
                1. Làm sạch chuyên sâu
              </h3>
              <ul class="space-y-2 ">
                <li>- Tẩy trang toàn mặt</li>
                <li>- Sữa rửa mặt</li>
                <li>
                  - Tẩy da chết:
                  <ul class="ml-4 space-y-2 my-2">
                    <li>- Sản phẩm Nhật: Tẩy da chết thông thường</li>
                    <li>- Sản phẩm Hàn: Tẩy da chết sủi bọt bằng đầu máy</li>
                  </ul>
                </li>
                <li>- Ủ đẩy bã nhờn (sản phẩm Hàn và Châu Âu)</li>
                <li>- Xông mặt nóng 5p</li>
                <li>- Hút bã nhờn</li>
                <li>- Lau sạch mặt bằng nước muối sinh lý</li>
              </ul>
            </div>

            <div class="mb-6 text-xl">
              <h3 class="text-2xl font-semibold  text-amber-200 mb-4">
                2. Massage thư giãn toàn bộ mặt và cổ
              </h3>
              <ul class="space-y-2">
                <li>- Massage bằng tay 5p</li>
                <li>- Massage bằng ngọc 5p</li>
                <li>- Rửa sạch mặt bằng mút</li>
              </ul>
            </div>

            <div class="mb-6 text-xl">
              <h1 class="text-2xl font-semibold  text-amber-200 mb-4">
                3. Đắp mặt nạ 15p
              </h1>
              <ul class="space-y-2">
                <li>- Chiếu đèn ánh sáng sinh học</li>
                <li>- Massage tay, bóp đầu cho khách lúc đắp mặt</li>
                <li>- Bỏ mặt nạ, lau sạch bằng mút</li>
              </ul>
            </div>

            <div class="mb-6 text-xl">
              <h3 class="text-2xl font-semibold  text-amber-200 mb-4">
                4. Phun nước hoa hồng 3p
              </h3>
            </div>

            <div class="mb-6 text-xl">
              <h1 class="text-2xl font-semibold  text-amber-200 mb-4">
                5. Điện di tinh chất HA 5p
              </h1>
            </div>

            <div class="mb-6 text-xl">
              <h1 class="text-2xl font-semibold  text-amber-200 mb-4">
                6. Bôi kem dưỡng
              </h1>
            </div>

            <div class="mb-6 text-xl">
              <h1 class="text-2xl font-semibold  text-amber-200 mb-4">
                7. Xông lạnh
              </h1>
            </div>

            <div class="mb-6 text-xl">
              <h1 class="text-2xl font-semibold  text-amber-200 mb-4">
                8. Bôi kem chống nắng
              </h1>
            </div>
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
