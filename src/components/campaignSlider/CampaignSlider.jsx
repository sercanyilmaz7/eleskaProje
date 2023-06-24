import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const slides = [
  {
    image:
      "https://www.birazbira.com/wp-content/uploads/2019/05/bira-nedir-1.jpg",
    title: "Bira",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKavFCvqw_lsk4i71FLZCIsPCm4nOwPGPHbrBIAiYw1hI9g9PPLYorlX4IErtF--64nE&usqp=CAU",
    title: "Dürüm",
  },
  {
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/11/firin-sutlac-son-tarifi.jpg",
    title: "Sütlaç",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jgLewdqw8eBLeJJ8DKxWSEdDtReGC3Q9VQ&usqp=CAU",
    title: "Karışık Baklava",
  },
  {
    image:
      "https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/2023/updates/header/AdanaKebap%20-%201260x839.jpg",
    title: "Kebap",
  },
  {
    image: "https://cdn.getiryemek.com/restaurants/1598533454185_1125x522.jpeg",
    title: "İskender",
  },
  {
    image:
      "https://etibolmanti.com.tr/wp-content/uploads/2019/05/ETIBOL_MANTI_0056s.jpg",
    title: "Mantı",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPCUR/DE_EPCUR_all_hero_9880.jpg?v752410959",
    title: "Makarna",
  },
  {
    image:
      "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-mushroom-pasta-1678049233.jpg",
    title: "Makarna",
  },
  {
    image:
      "https://iasbh.tmgrup.com.tr/9473f4/821/464/0/0/0/0?u=https://isbh.tmgrup.com.tr/sbh/2022/08/17/1660716079480.jpg",
    title: "Makarna",
  },
  {
    image:
      "https://iasbh.tmgrup.com.tr/9473f4/821/464/0/0/0/0?u=https://isbh.tmgrup.com.tr/sbh/2022/08/17/1660716079480.jpg",
    title: "Makarna",
  },
  {
    image:
      "https://im.haberturk.com/2022/10/23/3531958_4897f18fced57500715225fa9e9ce14e_640x640.jpg",
    title: "Çay",
  },
];

const CampaignSlider = () => {
  return (
    <div className="w-full   my-5 ">
      <h1 className=" mb-5   text-center  font-semibold text-2xl leading-10 ">
        Haftanın Enleri
      </h1>
      <div className="mx-5 xl:w-[65%] xl:mx-auto">
        <Swiper
          effect="coverflow"
          spaceBetween={50}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className=" rounded-lg "
        >
          {slides.map((slide, index) => (
            <SwiperSlide className="w-[350px] rounded-lg" key={index}>
            <h1 className=" text-xl text-center font-extrabold  ">
                {slide.title}
              </h1>
               <img
                className="w-full h-[350px] rounded-lg bg-cover bg-no-repeat  "
                src={slide.image}
              />            
            </SwiperSlide>
          ))}
          <div>
            <div className="swiper-button-prev">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CampaignSlider;
