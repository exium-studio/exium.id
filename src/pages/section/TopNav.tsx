import BButton from "@/components/ui-custom/BButton";
import navs from "@/constant/navs";
import { R_SPACING2 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import useScreen from "@/hooks/useScreen";
import { Box, BoxProps, HStack, Icon, Text } from "@chakra-ui/react";
import { IconArrowRight, IconMessage } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavDrawer from "./NavDrawer";

type Props = {
  activeNavIndex?: number;
} & BoxProps;
const TopNav = ({ activeNavIndex, ...props }: Props) => {
  const { sw } = useScreen();
  const { lang } = useLang();
  const { pathname } = useLocation();

  const [scrollYPos, setScrollYPos] = useState<number>(window.scrollY);
  const [navTop, setNavTop] = useState<number>(0);
  const homeRoute = pathname === "/";

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollYPos) {
      setNavTop(-64);
    } else {
      setNavTop(0);
    }

    setScrollYPos(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYPos, pathname]);

  return (
    <Box
      id="topNav"
      w={"calc(100% - 100px)"}
      // borderRadius={10}
      zIndex={99}
      position={"fixed"}
      top={`${navTop}px`}
      left={0}
      transition={"400ms"}
      animation={"flyInFromTop 1s"}
      bg={navTop !== 0 ? "body" : ""}
      pl={R_SPACING2}
      // bg={"body"}
      // color={darkLightColor}
      // backdropFilter={!trigger ? "blur(5px)" : ""}
      {...props}
    >
      <HStack
        justify={"space-between"}
        py={2}
        // h={scrollTop ? "80px" : "56px"}
        h={"64px"}
        transition={"300ms"}
      >
        <HStack flexShrink={0} w={"100px"}>
          <NavDrawer
            activeNavIndex={activeNavIndex}
            aria-label="Drawer Navs"
            color={navTop === 0 && homeRoute ? "light" : "current"}
          />
        </HStack>

        {sw > 900 ? (
          <HStack gap={5} ml={"100px"}>
            {navs?.map((nav, i) => {
              return (
                <Link key={i} to={nav.link}>
                  <BButton
                    flexShrink={0}
                    className="btn-clear"
                    borderRadius={0}
                    h={"32px !important"}
                    border={"none"}
                    borderBottom={"2px solid"}
                    borderColor={activeNavIndex === i ? "p.500" : "transparent"}
                    _hover={{
                      color: "p.500",
                    }}
                    transition={"200ms"}
                    color={navTop === 0 && homeRoute ? "light" : "current"}
                    fontSize={"1rem !important"}
                    disabled={nav.disabled}
                  >
                    {nav.label[lang]}
                  </BButton>
                </Link>
              );
            })}
          </HStack>
        ) : (
          ""
        )}

        <HStack
          flexShrink={0}
          w={[null, null, "100px"]}
          justify={"flex-end"}
        ></HStack>
      </HStack>

      <BButton
        colorPalette={"p"}
        position={"fixed"}
        top={0}
        right={0}
        size={"2xl"}
        fontSize={"lg !important"}
        // h={scrollTop ? "80px" : "56px"}
        h={"64px"}
        transition={"300ms"}
        // borderRadius={10}
        w={"204px"}
      >
        <Icon
          transform={"rotate(-10deg)"}
          mt={"-2px"}
          // animation={"rotate 10s linear infinite"}
        >
          <IconMessage />
        </Icon>
        <Text mt={"-3px"}> Let's Talk</Text>
        <Icon mt={"-3px"}>
          <IconArrowRight />
        </Icon>
      </BButton>
    </Box>
  );
};

export default TopNav;
