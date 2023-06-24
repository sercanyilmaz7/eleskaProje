import Card from "./Card";

const Products = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/free-photo/spicy-pide-with-meat-red-pepper_140725-1231.jpg?w=740&t=st=1687429372~exp=1687429972~hmac=8918c99c21fa6bd512dc2cbadc288c5bf0a6067ae16d8395f5019a68d5713835",
      title: "Kıymalı Pide",
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
  return (
    <div className="abcd ">
      <Card slides={slides} />
    </div>
  );
};

export default Products;
