import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

const slides = [
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PCSP/DE_PCSP_all_hero_11910.jpg?v-910499353",
    title: "This is title 1",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PSSA/DE_PSSA_all_hero_10571.jpg?v-377603643",
    title: "This is title 2",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PDUT/DE_PDUT_all_hero_11734.png?v-124775118",
    title: "This is title 3",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PBOS/DE_PBOS_all_hero_11872.png?v-2113143995",
    title: "This is title 4",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PPON/DE_PPON_all_hero_11872.png?v1872079273",
    title: "This is title 5",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PMEA/DE_PMEA_all_hero_11910.jpg?v1167088276",
    title: "This is title 6",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PCON/DE_PCON_all_hero_11734.png?v1493403577",
    title: "This is title 7",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPCUR/DE_EPCUR_all_hero_9880.jpg?v752410959",
    title: "This is title 8",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPVEG/DE_EPVEG_all_hero_11910.jpg?v789189983",
    title: "This is title 9",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPORL/DE_EPORL_all_hero_9880.jpg?v916554548",
    title: "This is title 10",
  },
];

const Slider = () => {
  const sliderLeft = () => {
    const slider = document.querySelector(".slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    const slider = document.querySelector(".slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="flex justify-center ">
      <div className="abcd ">
        <div id="main-slider-container">
          <MdChevronLeft
            size={40}
            className="slider-icon left"
            onClick={sliderLeft}
          />

          <div className="slider">
            {slides.map((slide, index) => {
              return (
                <div className="slider-card" key={index}>
                  <div
                    className="slider-card-image"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>
                  <div className="slider-content">
                    <p className="slider-card-title">{slide.title}</p>
                    <button className="slider-card-button flex flex-row justify-center items-center">
                      <span className="mx-2">ADD</span>
                      <AiOutlinePlusCircle />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <MdChevronRight
            size={40}
            className="slider-icon right"
            onClick={sliderRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
