import { FloatButton } from "antd";
import { CommentOutlined, CalendarOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CompoSpa() {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
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
  let itemComboSpa = [
    {
      id: 1,
      title: "CHĂM SÓC LÀM SẠCH VÀ CẤP NƯỚC CHUYÊN SÂU",
      body: [
        "Thời gian: 90 phút",
        "Giá sản phẩm Nhật 250k",
        "  Giá sản phẩm Cao Cấp Hàn 350k",
      ],
      img: "https://82xbeauty.vn/wp-content/uploads/2023/08/cham-soc-da-chuyen-sau-1.jpg",
      des: "Làm sạch và cấp ẩm là bước nền tảng trong hành trình làm đẹp, giúp làn da luôn căng mịn, săn chắc và duy trì nét thanh xuân.",
      button: (
        <button
          onClick={() => {
            navigate("/chamSocDaCongNgheCao/lamSachVaCapNuoc");
          }}
          className="border text-white py-2 px-4 rounded hover:scale-110 w-full transition"
        >
          Xem thêm
        </button>
      ),
    },
    {
      id: 2,
      title: "CHĂM SÓC LÀM SẠCH VÀ CẤP NƯỚC CHUYÊN SÂU",
      body: [
        "Thời gian: 90 phút",
        "Giá sản phẩm Nhật 250k",
        "  Giá sản phẩm Cao Cấp Hàn 550k",
        "Giá sản Phẩm cao cấp Châu Âu 1tr",
      ],
      img: "https://media.phunutoday.vn/files/content/2024/10/29/chamsocda4-1255.jpg",
      des: "Chăm sóc da trắng sáng không chỉ là cải thiện sắc tố mà còn là liệu trình giúp da khỏe mạnh từ sâu bên trong, mang lại vẻ đẹp rạng ngời.",
      button: (
        <button
          onClick={() => {
            navigate("/chamSocDaCongNgheCao/chamSocDaSang");
          }}
          className="border text-white py-2 px-4 rounded hover:scale-110 w-full transition"
        >
          Xem thêm
        </button>
      ),
    },
    {
      id: 3,
      title: "Nặn mụn làm sạch chuyên sâu",
      body: [
        "Thời gian: 90 phút",
        "Giá sản phẩm Nhật 350k",
        "Giá sản phẩm Cao Cấp Hàn 500k",
      ],
      img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/443/869/products/1-9539d838-d605-4803-a996-22b46c148277.jpg?v=1710154095940",
      des: "Đừng để mụn làm bạn mất tự tin – dịch vụ nặn mụn làm sạch chuyênsâu của chúng tôi giúp làm sạch từng lỗ chân lông và ngăn ngừa mụn tái phát.",
      button: (
        <button
          onClick={() => {
            navigate("/chamSocDaCongNgheCao/nanMunVaLamSach");
          }}
          className="border text-white py-2 px-4 rounded hover:scale-110 w-full transition"
        >
          Xem thêm
        </button>
      ),
    },
    {
      id: 4,
      title: "Gói Trẻ Hoá và Nâng Cơ cao cấp",
      body: [
        "Thời gian: 90 phút",
        "Giá sản phẩm Nhật 250k",
        "  Giá sản phẩm Cao Cấp Hàn 350k",
      ],
      img: "https://vedepnhatban.com/wp-content/uploads/2018/12/massage-nang-co-mat7.jpg",
      des: "Liệu trình nâng cơ cao cấp tại spa không chỉ là giải pháp chống lão hóa, mà còn là cách nuôi dưỡng làn da săn chắc, căng bóng tự nhiên.",
      button: (
        <button
          onClick={() => {
            navigate("/chamSocDaCongNgheCao/treHoaNangCaoCam");
          }}
          className="border text-white py-2 px-4 rounded hover:scale-110 w-full transition"
        >
          Xem thêm
        </button>
      ),
    },
  ];
  let renderComboSpa = () => {
    return itemComboSpa.map((item) => {
      if (item.id === 2 || item.id === 4) {
        return (
          <div className="  md:w-4/5 2xl:w-1/2 justify-center mt-10  flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2 m-5">
              <img
                className=" h-[250px] md:h-[400px]  w-full object-cover"
                src={item.img}
                alt=""
              />
            </div>
            <div className=" sm:w-1/2 flex flex-col justify-center md:pe-10 m-5">
              <p className="text-2xl md:text-3xl text-amber-100">
                {item.title}
              </p>

              <ul className="my-4">
                {item.body.map((item2) => {
                  return (
                    <li className="text-white text-lg font-extralight">
                      {item2}
                    </li>
                  );
                })}
              </ul>

              <p className="text-white text-sm ">"{item.des}"</p>
              <div className="flex justify-center md:justify-end mt-5">
                {item.button}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="block md:flex md:w-5/6 2xl:w-1/2 justify-center mt-10 ">
            <div className=" sm:w-1/2 flex flex-col justify-center md:pe-10 m-5">
              <p className="text-2xl md:text-3xl text-amber-100">
                {item.title}
              </p>

              <ul className="my-4">
                {item.body.map((item2) => {
                  return (
                    <li className="text-white text-lg font-extralight">
                      {item2}
                    </li>
                  );
                })}
              </ul>

              <p className="text-white text-sm">"{item.des}"</p>
              <div className="flex justify-center md:justify-end  mt-5">
                {item.button}
              </div>
            </div>
            <div className="md:w-1/2 m-5">
              <img
                className=" h-[250px] md:h-[400px] w-full object-cover "
                src={item.img}
                alt=""
              />
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div
      className=" flex items-center flex-col "
      style={{
        backgroundColor: "rgb(8,42,35)",
      }}
    >
      <div className="h-80 md:h-full">
        <img
          className="h-full object-cover"
          src="/assets/imgComboSpa/bannerSpa.png"
          alt=""
        />
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
      {renderComboSpa()}
    </div>
  );
}
