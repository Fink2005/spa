import React from "react";

export default function Footer() {
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
        <div className="lg:m-5 flex md:block flex-col justify-center items-center lg:h-[350px]">
          <p className="text-2xl text-white my-2">Fanpage Facebook</p>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100092274255797%26sk%3Dabout&tabs=timeline&width=400&height=400&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
            className="w-[250px] h-[75px] lg:w-[350px]  sm:w-[300px] "
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            title="facebook"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
        <div className="my-8 lg:m-5 flex flex-col items-center">
          <p className=" text-white text-sm mt-5 w-60 font-light">
            <span className="text-white text-2xl ">Địa chỉ</span>: 02 Thảo
            Nguyên - Ecopark Hotline: 0869 244 686
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
