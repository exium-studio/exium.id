import { useColorModeValue } from "@/components/ui/color-mode";

const useContentBgColor = () => {
  return useColorModeValue("#f8f8f8", "#121212");
};

const useTableStripedColor = () => {
  return useColorModeValue("#fbfbfb", "#171717");
};

const useLightDarkColor = () => {
  return useColorModeValue("light", "dark");
};

const useLightDarkColorAlpha = () => {
  return useColorModeValue("#FFFFFF70", "#15151570");
};

const useDarkLightColor = () => {
  return useColorModeValue("dark", "light");
};

const useErrorColor = () => {
  return useColorModeValue("#E53E3E", "#FC8181");
};

const useWarningColor = () => {
  return useColorModeValue("#C05621", "#FBD38D");
};

const useErrorAlphaColor = () => {
  return useColorModeValue("red.50", "rgba(254, 178, 178, 0.12)");
};

const useWarningAlphaColor = () => {
  return useColorModeValue(
    "rgba(251, 211, 141, 0.12)",
    "rgba(251, 211, 141, 0.12)"
  );
};

const portoColor = [
  "rgba(155, 89, 182, 0.75)", // Violet Purple - elegan dan kontras, cocok untuk teks atau ikon
  "rgba(88, 170, 225, 0.8)", // Sky Blue - cerah dan seimbang, kontras baik di light dan dark mode
  "rgba(125, 203, 136, 0.8)", // Mint Green - menyegarkan dan cocok untuk elemen latar atau aksen
  "rgba(255, 99, 130, 0.85)", // Warm Coral Pink - menarik untuk tombol atau aksen
  "rgba(241, 143, 1, 0.85)", // Vivid Orange - menonjol dan kontras, sangat baik untuk aksen
  "rgba(245, 223, 77, 0.9)", // Soft Yellow - cerah dan kontras di kedua mode
];

export {
  portoColor,
  useLightDarkColorAlpha,
  useContentBgColor,
  useLightDarkColor,
  useDarkLightColor,
  useErrorColor,
  useErrorAlphaColor,
  useWarningColor,
  useWarningAlphaColor,
  useTableStripedColor,
};
