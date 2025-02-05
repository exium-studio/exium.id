import BButton from "@/components/ui-custom/BButton";
import navs from "@/constant/navs";
import { useLang } from "@/hooks/useLang";
import useScreen from "@/hooks/useScreen";
import { Box, BoxProps, Button, HStack, Icon } from "@chakra-ui/react";
import { IconArrowRight, IconMoodHappy } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import NavDrawer from "./NavDrawer";

type Props = {
  activeNavIndex?: number;
} & BoxProps;
const TopNav = ({ activeNavIndex, ...props }: Props) => {
  const { sw } = useScreen();
  const { lang } = useLang();
  const { pathname } = useLocation();

  const [scrollYPos, setScrollYPos] = useState<number>(window.scrollY);
  // const [trigger, setTrigger] = useState<boolean>(true);
  const [navTop, setNavTop] = useState<number>(0);
  // const scrollTop = scrollYPos === 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // setTrigger(currentScrollY <= 10);

    if (currentScrollY > scrollYPos) {
      setNavTop(-56);
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
      w={"100%"}
      zIndex={99}
      position={"fixed"}
      top={`${navTop}px`}
      left={0}
      transition={"400ms"}
      animation={"flyInFromTop 1s"}
      bg={"body"}
      // color={darkLightColor}
      // bg={!trigger ? "darktrans" : ""}
      // backdropFilter={!trigger ? "blur(5px)" : ""}
      {...props}
    >
      <Container>
        <HStack
          justify={"space-between"}
          py={2}
          w={"100%"}
          // h={scrollTop ? "80px" : "56px"}
          h={"64px"}
          transition={"300ms"}
        >
          <HStack flexShrink={0} w={"100px"}>
            <NavDrawer
              activeNavIndex={activeNavIndex}
              aria-label="Drawer Navs"
              color={"current"}
            />
          </HStack>

          {sw > 900 ? (
            <HStack gap={5}>
              {navs?.map((nav, i) => {
                return (
                  <Link key={i} to={nav.link}>
                    <Button
                      flexShrink={0}
                      className="btn-clear"
                      borderRadius={0}
                      h={"32px !important"}
                      border={"none"}
                      borderBottom={"2px solid"}
                      borderColor={
                        activeNavIndex === i ? "p.500" : "transparent"
                      }
                      _hover={{
                        color: "p.500",
                      }}
                      transition={"200ms"}
                      color={"current"}
                      fontWeight={"500 !important"}
                      fontSize={"1rem !important"}
                    >
                      {nav.label[lang]}
                    </Button>
                  </Link>
                );
              })}
            </HStack>
          ) : (
            ""
          )}

          <HStack flexShrink={0} w={[null, null, "100px"]} justify={"flex-end"}>
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
            >
              <Icon transform={"rotate(-20deg)"}>
                <IconMoodHappy />
              </Icon>
              Let's Talk
              <Icon>
                <IconArrowRight />
              </Icon>
            </BButton>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default TopNav;
