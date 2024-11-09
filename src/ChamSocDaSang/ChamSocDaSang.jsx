import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { FloatButton } from "antd";

import { CommentOutlined, CalendarOutlined } from "@ant-design/icons";
export default function ChamSocDaSang() {
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
      <div className="py-5 ps-5 flex items-center justify-between">
        <div>
          <NavLink to="/" className="text-white font-thin text-lg">
            Trang chủ
          </NavLink>
          <i class="fa fa-angle-right text-white mx-2"></i>
          <NavLink to="/Menu" className="text-white font-thin text-lg">
            Menu
          </NavLink>
        </div>
        <div className="pe-5">
          <NavLink to="/chamSocDaCongNgheCao">
            <img
              className="w-5"
              src="/assets/imgComboSpa/previous.png"
              alt=""
            />{" "}
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center m-5">
        <div className="my-10">
          <img src="/assets/imgComboSpa/daTrangSang.png" alt="" />
        </div>
        <div className="my-5">
          <p className="md:text-3xl text-xl text-amber-100">
            Chăm sóc da Trắng Sáng cao cấp
          </p>
          <ul className="my-4">
            <li className="text-white text-lg font-extralight">
              Thời gian: 50 phút
            </li>
            <li className="text-white text-lg font-extralight">
              Giá sản phẩm Nhật 350k
            </li>
            <li className="text-white text-lg font-extralight">
              {" "}
              Giá sản phẩm Cao Cấp Hàn 550k
            </li>
            <li className="text-white text-lg font-extralight">
              {" "}
              Giá sản Phẩm cao cấp Châu Âu 1tr
            </li>
          </ul>
          <p className="text-white w-full md:w-[700px] ">
            "Chăm sóc da trắng sáng không chỉ là cải thiện sắc tố mà còn là liệu
            trình giúp da khỏe mạnh từ sâu bên trong, mang lại vẻ đẹp rạng
            ngời."
          </p>
        </div>
        <div class="text-white">
          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              1. Làm sạch mặt chuyên sâu
            </h3>
            <ul class="space-y-2">
              <li>- Tẩy trang</li>
              <li>- Sữa rửa mặt</li>
              <li>
                - Tẩy da chết (Tẩy da chết sủi bọt bằng đầu máy với sản phẩm Hàn
                và Châu Âu)
              </li>
              <li>- Ủ đẩy bã nhờn (sản phẩm Hàn và Châu Âu)</li>
              <li>- Xông mặt nóng 5p</li>
              <li>- Hút bã nhờn</li>
              <li>- Lau sạch mặt bằng nước muối sinh lý</li>
            </ul>
          </div>

          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              2. Massage thư giãn mặt và cổ vai gáy
            </h3>
            <ul class="space-y-2">
              <li>- Massage bằng tay 5p</li>
              <li>- Massage bằng ngọc 5p</li>
              <li>- Rửa sạch mặt bằng mút</li>
            </ul>
          </div>

          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              3. Đắp mặt nạ 10p
            </h3>
            <ul class="space-y-2">
              <li>- Chiếu đèn ánh sáng sinh học</li>
              <li>- Massage tay, bóp đầu cho khách lúc đắp mặt</li>
              <li>- Bỏ mặt nạ, lau sạch bằng mút</li>
            </ul>
          </div>

          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              4. Phun nước hoa hồng 3p
            </h3>
          </div>

          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              5. Điện di tinh chất trắng sáng 5p
            </h3>
          </div>

          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              6. Nén tinh chất 5p
            </h3>
          </div>

          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              7. Bôi kem dưỡng
            </h3>
          </div>

          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              8. Điện di lạnh 5p
            </h3>
          </div>

          <div class="mb-6 text-xl">
            <h3 class="text-2xl font-semibold text-amber-200 mb-4">
              9. Bôi kem chống nắng
            </h3>
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
