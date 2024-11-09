import React from "react";

export default function Footer() {
  let toFacebook = () => {
    window.location.href =
      "https://www.facebook.com/p/Vi-Ti%C3%AAn-C%C3%A1t-100092274255797/";
  };
  return (
    <div
      id="footer"
      className="footer relative md:!block h-full  lg:h-[500px] z-0    "
    >
      <div className="absolute top-0 w-full h-full bg-customGreen2 opacity-85 -z-10"></div>
      <div className="z-10 px-3 md:px-20 py-10 lg:flex justify-center items-center h-full ">
        <div className=" flex justify-center flex-col items-center ">
          <div>
            <img className="w-44" src="/assets/imgCarousel/logo.jpg" alt="" />
          </div>
          <p className=" text-white text-sm mt-5 w-60 font-light text-center">
            Vi tiên cát - Điểm đến làm đẹp lý tưởng. Chúng tôi mong muốn Vi tiên
            cát sẽ trở thành "Nhà Spa", nơi mọi người giải tỏa được sự mệt mỏi
            và tìm thấy niềm vui, sự sẻ chia thân tình bên bạn bè và người thân.
          </p>
        </div>
        <div className="lg:m-5 flex  flex-col justify-center items-center lg:h-[350px] my-8 md:my-0">
          <p className="text-2xl text-white my-2">Fanpage Facebook</p>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FVi-Ti%25C3%25AAn-C%25C3%25A1t-100092274255797%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="fb"
            className="w-[250px] h-[75px] lg:h-[330px] lg:w-[350px]  sm:w-[300px] hidden md:!block"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />

          <div
            className="w-[250px] h-[75px] lg:w-[350px]  sm:w-[300px] relative group cursor-pointer block md:hidden"
            onClick={toFacebook}
          >
            <img src="/assets/imgCarousel/pic1.png" alt="" />
            <div className="absolute top-2 md:top-3 left-2 flex">
              <div className="w-10 md:w-14 border-2">
                <img src="/assets/imgCarousel/logo.jpg" alt="" />
              </div>
              <div className="ps-1">
                <p className="text-white">Vi Tiên Cát</p>
                <div className="bg-white text-xs flex justify-center items-center text-gray-400">
                  <i class="fab fa-facebook-square  group-hover:text-blue-500 transition"></i>{" "}
                  <span className="ps-1 group-hover:text-black transition">
                    Follow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:m-5 flex flex-col items-center">
          <p className=" text-white text-sm  w-60 font-light">
            <span className="text-white text-2xl ">Địa chỉ</span>: 02 Thảo
            Nguyên
          </p>
          <p className=" text-white text-sm  w-60 font-light">
            {" "}
            Ecopark Hotline: 0869 244 686
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.036228888132!2d105.93950475852938!3d20.952240386400167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135afa0a406b925%3A0x158924f013a77f60!2zMiBUaOG6o28gTmd1ecOqbiwgUGjhu6VuZyBDw7RuZywgVsSDbiBHaWFuZywgSMawbmcgWcOqbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1730962285182!5m2!1svi!2s"
            title="address"
            className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] sm:w-[300px] sm:h-[300px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
