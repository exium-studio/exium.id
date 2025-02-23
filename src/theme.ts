import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      bg: "body",
    },
  },
  theme: {
    tokens: {
      colors: {
        light: { value: "#fff" },
        dark: { value: "#191919" },
        darktrans: { value: "#252525df" },
        d0: { value: "#8a8a8a08" },
        d1: { value: "#8a8a8a10" },
        d2: { value: "#8a8a8a20" },
        d3: { value: "#8a8a8a36" },
        dt: { value: "#858585ff" },
        p: {
          50: { value: "#f5faff" },
          100: { value: "#CCE7FF" },
          200: { value: "#99CCFF" },
          300: { value: "#66ACFF" },
          400: { value: "#3F90FF" },
          500: { value: "#0062FF" },
          "500a": { value: "#1a91ff20" },
          600: { value: "#004BDB" },
          700: { value: "#0038B7" },
          800: { value: "#002793" },
          900: { value: "#001B7A" },
        },
        gray: {
          50: { value: "#fbfbfb" },
          100: { value: "#f5f5f5" },
          200: { value: "#e5e5e5" },
          300: { value: "#d4d4d4" },
          400: { value: "#bcbcbc" },
          500: { value: "#9e9e9e" },
          600: { value: "#626262" },
          700: { value: "#515151" },
          800: { value: "#272727" },
          900: { value: "#202020" },
        },
        indigo: {
          50: { value: "#E8EAF6" },
          100: { value: "#C5CAE9" },
          200: { value: "#9FA8DA" },
          300: { value: "#7986CB" },
          400: { value: "#5C6BC0" },
          500: { value: "#3F51B5" },
          600: { value: "#3949AB" },
          700: { value: "#303F9F" },
          800: { value: "#283593" },
          900: { value: "#1A237E" },
        },
        amber: {
          50: { value: "#FFF8E1" },
          100: { value: "#FFECB3" },
          200: { value: "#FFE082" },
          300: { value: "#FFD54F" },
          400: { value: "#FFCA28" },
          500: { value: "#FFC107" },
          600: { value: "#FFB300" },
          700: { value: "#FFA000" },
          800: { value: "#FF8F00" },
          900: { value: "#FF6F00" },
        },
        lime: {
          50: { value: "#F9FBE7" },
          100: { value: "#F0F4C3" },
          200: { value: "#E6EE9C" },
          300: { value: "#DCE775" },
          400: { value: "#D4E157" },
          500: { value: "#CDDC39" },
          600: { value: "#C0CA33" },
          700: { value: "#AFB42B" },
          800: { value: "#9E9D24" },
          900: { value: "#827717" },
        },
        brown: {
          50: { value: "#EFEBE9" },
          100: { value: "#D7CCC8" },
          200: { value: "#BCAAA4" },
          300: { value: "#A1887F" },
          400: { value: "#8D6E63" },
          500: { value: "#795548" },
          600: { value: "#6D4C41" },
          700: { value: "#5D4037" },
          800: { value: "#4E342E" },
          900: { value: "#3E2723" },
        },
        olive: {
          50: { value: "#F2F4E7" },
          100: { value: "#DDE3C4" },
          200: { value: "#C7D29F" },
          300: { value: "#B1C17A" },
          400: { value: "#9CB055" },
          500: { value: "#879F30" },
          600: { value: "#758B2B" },
          700: { value: "#637726" },
          800: { value: "#506321" },
          900: { value: "#3D4F1C" },
        },
        magenta: {
          50: { value: "#FCE8F1" },
          100: { value: "#F9C5DC" },
          200: { value: "#F6A1C7" },
          300: { value: "#F37DB2" },
          400: { value: "#F0599D" },
          500: { value: "#ED3588" },
          600: { value: "#D12D75" },
          700: { value: "#B52562" },
          800: { value: "#991D4F" },
          900: { value: "#7D153C" },
        },
        ocean: {
          50: { value: "#E0F7FA" },
          100: { value: "#B2EBF2" },
          200: { value: "#80DEEA" },
          300: { value: "#4DD0E1" },
          400: { value: "#26C6DA" },
          500: { value: "#00BCD4" },
          600: { value: "#00ACC1" },
          700: { value: "#0097A7" },
          800: { value: "#00838F" },
          900: { value: "#006064" },
        },
      },
    },
    semanticTokens: {
      colors: {
        body: { value: { base: "#fff", _dark: "#191919" } },
        bodytrans: { value: { base: "#ffffffaa", _dark: "#191919aa" } },
        current: { value: { base: "#191919", _dark: "#fff" } },
        ibody: { value: { base: "#191919", _dark: "#FAFAFC" } },
        p: {
          solid: { value: { base: "{colors.p.500}", _dark: "{colors.p.500}" } },
          contrast: { value: "{colors.p.100}" },
          fg: { value: { base: "{colors.p.700}", _dark: "{colors.p.200}" } },
          muted: { value: { base: "{colors.p.300}", _dark: "{colors.p.800}" } },
          subtle: {
            value: { base: "{colors.p.200}", _dark: "{colors.p.900}" },
          },
          emphasized: { value: "{colors.p.300}" },
          focusRing: {
            value: { base: "{colors.p.500}", _dark: "{colors.p.900}" },
          },
        },
        ap: {
          solid: { value: "{colors.p.500}" },
          contrast: { value: "{colors.p.500}" },
          fg: { value: "{colors.p.500}" },
          muted: { value: "{colors.p.500}" },
          subtle: { value: "{colors.p.500}" },
          emphasized: { value: "{colors.p.500}" },
          focusRing: { value: "{colors.p.500}" },
        },
        aw: {
          solid: { value: "{white}" },
          contrast: { value: "{white}" },
          fg: { value: "{white}" },
          muted: { value: "{white}" },
          subtle: { value: "{white}" },
          emphasized: { value: "{white}" },
          focusRing: { value: "{white}" },
        },
        red: {
          contrast: { value: "{colors.red.100} !important" },
        },
        orange: {
          solid: {
            value: {
              base: "{colors.orange.500} !important",
              _dark: "{colors.orange.500}",
            },
          },
          contrast: { value: "{colors.orange.100} !important" },
        },
        indigo: {
          solid: {
            value: {
              base: "{colors.indigo.500}",
              _dark: "{colors.indigo.500}",
            },
          },
          contrast: { value: "{colors.indigo.100}" },
          fg: {
            value: {
              base: "{colors.indigo.700}",
              _dark: "{colors.indigo.200}",
            },
          },
          muted: {
            value: {
              base: "{colors.indigo.300}",
              _dark: "{colors.indigo.800}",
            },
          },
          subtle: {
            value: {
              base: "{colors.indigo.200}",
              _dark: "{colors.indigo.900}",
            },
          },
          emphasized: { value: "{colors.indigo.300}" },
          focusRing: {
            value: {
              base: "{colors.indigo.500}",
              _dark: "{colors.indigo.900}",
            },
          },
        },
        amber: {
          solid: {
            value: { base: "{colors.amber.500}", _dark: "{colors.amber.500}" },
          },
          contrast: { value: "{colors.amber.100}" },
          fg: {
            value: { base: "{colors.amber.700}", _dark: "{colors.amber.200}" },
          },
          muted: {
            value: { base: "{colors.amber.300}", _dark: "{colors.amber.800}" },
          },
          subtle: {
            value: { base: "{colors.amber.200}", _dark: "{colors.amber.900}" },
          },
          emphasized: { value: "{colors.amber.300}" },
          focusRing: {
            value: { base: "{colors.amber.500}", _dark: "{colors.amber.900}" },
          },
        },
        lime: {
          solid: {
            value: { base: "{colors.lime.500}", _dark: "{colors.lime.500}" },
          },
          contrast: { value: "{colors.lime.100}" },
          fg: {
            value: { base: "{colors.lime.700}", _dark: "{colors.lime.200}" },
          },
          muted: {
            value: { base: "{colors.lime.300}", _dark: "{colors.lime.800}" },
          },
          subtle: {
            value: { base: "{colors.lime.200}", _dark: "{colors.lime.900}" },
          },
          emphasized: { value: "{colors.lime.300}" },
          focusRing: {
            value: { base: "{colors.lime.500}", _dark: "{colors.lime.900}" },
          },
        },
        brown: {
          solid: {
            value: { base: "{colors.brown.500}", _dark: "{colors.brown.500}" },
          },
          contrast: { value: "{colors.brown.100}" },
          fg: {
            value: { base: "{colors.brown.700}", _dark: "{colors.brown.200}" },
          },
          muted: {
            value: { base: "{colors.brown.300}", _dark: "{colors.brown.800}" },
          },
          subtle: {
            value: { base: "{colors.brown.200}", _dark: "{colors.brown.900}" },
          },
          emphasized: { value: "{colors.brown.300}" },
          focusRing: {
            value: { base: "{colors.brown.500}", _dark: "{colors.brown.900}" },
          },
        },
        olive: {
          solid: {
            value: { base: "{colors.olive.500}", _dark: "{colors.olive.500}" },
          },
          contrast: { value: "{colors.olive.100}" },
          fg: {
            value: { base: "{colors.olive.700}", _dark: "{colors.olive.200}" },
          },
          muted: {
            value: { base: "{colors.olive.300}", _dark: "{colors.olive.800}" },
          },
          subtle: {
            value: { base: "{colors.olive.200}", _dark: "{colors.olive.900}" },
          },
          emphasized: { value: "{colors.olive.300}" },
          focusRing: {
            value: { base: "{colors.olive.500}", _dark: "{colors.olive.900}" },
          },
        },
        magenta: {
          solid: {
            value: {
              base: "{colors.magenta.500}",
              _dark: "{colors.magenta.500}",
            },
          },
          contrast: { value: "{colors.magenta.100}" },
          fg: {
            value: {
              base: "{colors.magenta.700}",
              _dark: "{colors.magenta.200}",
            },
          },
          muted: {
            value: {
              base: "{colors.magenta.300}",
              _dark: "{colors.magenta.800}",
            },
          },
          subtle: {
            value: {
              base: "{colors.magenta.200}",
              _dark: "{colors.magenta.900}",
            },
          },
          emphasized: { value: "{colors.magenta.300}" },
          focusRing: {
            value: {
              base: "{colors.magenta.500}",
              _dark: "{colors.magenta.900}",
            },
          },
        },
        ocean: {
          solid: {
            value: { base: "{colors.ocean.500}", _dark: "{colors.ocean.500}" },
          },
          contrast: { value: "{colors.ocean.100}" },
          fg: {
            value: { base: "{colors.ocean.700}", _dark: "{colors.ocean.200}" },
          },
          muted: {
            value: { base: "{colors.ocean.300}", _dark: "{colors.ocean.800}" },
          },
          subtle: {
            value: { base: "{colors.ocean.200}", _dark: "{colors.ocean.900}" },
          },
          emphasized: { value: "{colors.ocean.300}" },
          focusRing: {
            value: { base: "{colors.ocean.500}", _dark: "{colors.ocean.900}" },
          },
        },
      },
    },
  },
});

const customSystem = createSystem(defaultConfig, customConfig);

export default customSystem;
