import { Interface__Nav } from "./interfaces";

const navs: Interface__Nav[] = [
  {
    label: {
      id: "Beranda",
      en: "Home",
    },
    path: "/",
  },
  {
    label: {
      id: "Karya",
      en: "Works",
    },
    path: "/works",
    disabled: true,
  },
  {
    label: {
      id: "Tentang Kami",
      en: "About Us",
    },
    path: "/about-us",
  },
  {
    label: {
      id: "Layanan",
      en: "Services",
    },
    path: "/services",
  },
  {
    label: {
      id: "Produk",
      en: "Products",
    },
    path: "/products",
  },
  // {
  //   label: {
  //     id: "FAQs",
  //     en: "FAQs",
  //   },
  //   path: "/faqs",
  // },
];

export default navs;
