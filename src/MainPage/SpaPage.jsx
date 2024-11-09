import { Carousel, Image, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpaPage({ sectionRef }) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setScrolled(true);
        console.log("true");
      } else {
        console.log("false");
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  let navigateNe = () => {
    window.location.href = "/chamSocDaCongNgheCao";
  };
  return (
    <div className=" mb-52 md:mb-7 pb-10">
      <div className="w-full flex justify-center  ">
        <div className="  rounded-lg flex items-center flex-col justify-center  ">
          {" "}
          <div className="text-left w-full">
            <div className=" flex justify-center">
              {" "}
              <p className="text-4xl text-customGreen2"> Vi Tiên Cát Spa</p>
              <div className="ms-2">
                <img
                  className="w-10 rounded-full"
                  src="assets/imgCarousel/logo.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" pt-10 p-5">
            {" "}
            <p className="text-lg text-customGreen2">
              {" "}
              Vi Tiên Cát Spa Vi Tiên Cát quan niệm rằng, vẻ đẹp không phải thứ
              cần thay đổi - mà nó đáng được trân trọng và yêu thương. Chúng
              mình muốn gửi đến bạn một lời nhắn rằng: Bạn luôn xinh đẹp nhất
              khi là chính mình! Chăm sóc da không chỉ đơn thuần là làm đẹp, mà
              còn là cách bạn thể hiện sự quý trọng với từng đường nét làm nên
              vẻ độc đáo của riêng mình. Vi Tiên Cát sẽ luôn đồng hành cùng bạn
              tôn vinh sắc diện, bởi không có gì quý giá hơn khi bạn được toả
              sáng với phiên bản chân thật nhất 💚
            </p>{" "}
          </div>
        </div>
      </div>

      <div
        className="relative"
        style={{
          backgroundColor: "rgb(250,243,235)",
        }}
      >
        <div className="z-0 overflow-hidden absolute top-0 w-full h-full px-5 pt-5">
          <p className="text-lg text-customGreen2">
            Cung cấp các dịch vụ chăm sóc sức khoẻ và sắc đẹp một cách chuyên
            nghiệp và tinh tế. Toạ lạc tại thành phố xanh Ecopark nơi con người
            hoà vào thiên nhiên.{" "}
          </p>
          <p className="text-lg text-blue-500">
            Địa chỉ: 02 Thảo Nguyên - Ecopark Hotline:{" "}
            <a className="hover:text-gray-500" href="+84869244686">
              0869 244 686
            </a>{" "}
          </p>
          <p className="text-lg text-customGreen2">
            Xin hãy đặt lịch để chúng mình chuẩn bị đón tiếp bạn một cách chu
            đáo nhất!
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgb(8,42,35)",
          }}
          className={`lg:rounded-custom-large  rounded-custom-medium transition-all duration-1000 relative     ${
            scrolled
              ? "translate-y-custom3 md:translate-y-custom2 lg:translate-y-custom"
              : "-translate-y-2 "
          }`}
        >
          <div className="items-center flex flex-col">
            <div>
              <p className="lg:text-5xl  text-3xl text-center text-amber-100 py-10 ">
                Dịch vụ chăm sóc da công nghệ cao
              </p>
            </div>
            <div
              className=" rounded-xl overflow-hidden relative h-72 md:h-96 group w-[350px] sm:w-[650px] cursor-pointer md:w-[700px]"
              onClick={navigateNe}
            >
              <img
                className="opacity-70 w-full h-full object-cover"
                src="/assets/imgBody/spa1.png"
                alt=""
                loading="lazy"
              />

              <div className="absolute top-0 w-full h-full z-10 text-amber-50 text-lg bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
              <img
                className="w-10 top-2 left-2 absolute rounded-full"
                src="/assets/imgCarousel/logo.jpg"
                alt=""
                loading="lazy"
              />
              <div className="  absolute w-full h-full   justify-center items-center top-0 text-white  text-lg hidden  group-hover:!flex transition duration-300">
                <p className="z-30">Xem Thêm</p>
              </div>
              <div className="absolute w-full h-full  flex justify-center items-center top-0 group-hover:!hidden text-lg text-customGreen2 opacity-55">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>
          <div className=" items-center flex flex-col ">
            <p className="lg:text-5xl text-3xl text-center text-amber-100 py-10">
              Dịch vụ treatment
            </p>
            <div className=" rounded-xl overflow-hidden relative h-72 md:h-96 group w-[350px] sm:w-[650px] cursor-pointer md:w-[700px] ">
              <Image.PreviewGroup
                className="opacity-70 w-full object-cover h-full"
                items={["/assets/imgBody/treatment-menu.png"]}
              >
                <Image
                  width="100%"
                  height="100%"
                  preview={{
                    mask: <div className="text-lg">Xem thêm</div>,
                  }}
                  className="opacity-70 h-full object-center  object-cover"
                  src="/assets/imgBody/treatment.jpg"
                />
              </Image.PreviewGroup>

              <img
                className="w-10 top-2 left-2 absolute rounded-full"
                src="/assets/imgCarousel/logo.jpg"
                alt=""
                loading="lazy"
              />
              <div className="absolute w-full h-full  flex justify-center items-center top-0 group-hover:!hidden text-lg text-customGreen2 opacity-55">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>
          <div className=" items-center flex flex-col">
            <p className="lg:text-5xl text-3xl text-center text-amber-100 py-10">
              Dịch vụ gội đầu dưỡng sinh
            </p>
            <div className=" rounded-xl overflow-hidden relative h-72 md:h-96 group w-[350px] sm:w-[650px] cursor-pointer md:w-[700px] group">
              <Image.PreviewGroup items={["/assets/imgBody/goi-dau.jpg"]}>
                <Image
                  preview={{
                    mask: <div className="text-lg">Xem thêm</div>,
                  }}
                  width="100%"
                  height="100%"
                  className="opacity-70 object-cover  h-full"
                  src="/assets/imgBody/goi-dau-new.png"
                />
              </Image.PreviewGroup>

              <img
                className="w-10 top-2 left-2 absolute rounded-full"
                src="/assets/imgCarousel/logo.jpg"
                alt=""
                loading="lazy"
              />
              <div className="absolute w-full h-full justify-center flex items-center top-0  text-lg text-customGreen2 opacity-55  group-hover:!hidden">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>
          <div className=" items-center flex flex-col ">
            <p className="lg:text-5xl text-3xl text-center text-amber-100 py-10">
              Dịch vụ chăm sóc body
            </p>
            <div className=" rounded-xl overflow-hidden relative h-72 md:h-96 group w-[350px] sm:w-[650px] cursor-pointer md:w-[700px]">
              <Image.PreviewGroup
                className="opacity-70 w-full object-cover h-full"
                items={["/assets/imgBody/bodyNew.png"]}
              >
                <Image
                  width="100%"
                  height="100%"
                  preview={{
                    mask: <div className="text-lg">Xem thêm</div>,
                  }}
                  className="opacity-70 h-full object-center  object-cover"
                  src="/assets/imgBody/cham-soc-body.png"
                />
              </Image.PreviewGroup>

              <img
                className="w-10 top-2 left-2 absolute rounded-full"
                src="/assets/imgCarousel/logo.jpg"
                alt=""
                loading="lazy"
              />
              <div className="absolute w-full h-full  flex justify-center items-center top-0 group-hover:!hidden text-lg text-customGreen2 opacity-55">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>
          <div className=" items-center flex flex-col ">
            <p className="lg:text-5xl text-3xl text-center text-amber-100 py-10">
              Dịch vụ triệt lông
            </p>
            <div className=" rounded-xl overflow-hidden relative h-72 md:h-96 group w-[350px] sm:w-[650px] cursor-pointer md:w-[700px]">
              <Image.PreviewGroup
                className="opacity-70 w-full object-cover h-full"
                items={["/assets/imgBody/trietLong.png"]}
              >
                <Image
                  width="100%"
                  height="100%"
                  preview={{
                    mask: <div className="text-lg">Xem thêm</div>,
                  }}
                  className="opacity-70 h-full object-center  object-cover"
                  src="/assets/imgBody/triet-long.png"
                />
              </Image.PreviewGroup>

              <img
                className="w-10 top-2 left-2 absolute rounded-full"
                src="/assets/imgCarousel/logo.jpg"
                alt=""
                loading="lazy"
              />
              <div className="absolute w-full h-full  flex justify-center items-center top-0 group-hover:!hidden text-lg text-customGreen2 opacity-55">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>
          <div className=" items-center flex flex-col ">
            <p className="lg:text-5xl text-3xl text-center text-amber-100 py-10 max-w-[280px] md:!max-w-none">
              Dịch vụ ngâm xông lá dao- Tắm trắng phi thuyền nano
            </p>
            <div className=" rounded-xl overflow-hidden relative h-72 md:h-96 group w-[350px] sm:w-[650px] cursor-pointer md:w-[700px]">
              <Image.PreviewGroup
                className="opacity-70 w-full object-cover h-full"
                items={["/assets/imgBody/tamMenu.png"]}
              >
                <Image
                  width="100%"
                  height="100%"
                  preview={{
                    mask: <div className="text-lg">Xem thêm</div>,
                  }}
                  className="opacity-70 h-full object-center  object-cover"
                  src="/assets/imgBody/tam.png"
                />
              </Image.PreviewGroup>

              <img
                className="w-10 top-2 left-2 absolute rounded-full"
                src="/assets/imgCarousel/logo.jpg"
                alt=""
                loading="lazy"
              />
              <div className="absolute w-full h-full  flex justify-center items-center top-0 group-hover:!hidden text-lg text-customGreen2 opacity-55">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>
          <div className=" items-center flex flex-col pb-52">
            <p className="lg:text-5xl text-3xl text-center text-amber-100 py-10 ">
              Dịch vụ Móng và Mi
            </p>

            <div className=" rounded-xl overflow-hidden relative h-72 md:h-96 group w-[350px] sm:w-[650px] cursor-pointer md:w-[700px]">
              <Image.PreviewGroup
                className="opacity-70 w-full object-cover h-full"
                items={["/assets/imgBody/mong-mi.png"]}
              >
                <Image
                  width="100%"
                  height="100%"
                  preview={{
                    mask: <div className="text-lg">Xem thêm</div>,
                  }}
                  className="opacity-70 h-full object-center  object-cover"
                  src="/assets/imgBody/mi-mong.png"
                />
              </Image.PreviewGroup>

              <img
                className="w-10 top-2 left-2 absolute rounded-full"
                src="/assets/imgCarousel/logo.jpg"
                alt=""
                loading="lazy"
              />
              <div className="absolute w-full h-full  flex justify-center items-center top-0 group-hover:!hidden text-lg text-customGreen2 opacity-55">
                <p>Xem Thêm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
