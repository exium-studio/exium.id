import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading5 from "@/components/ui-custom/Heading5";
import Rating from "@/components/widget/Rating";
import contents from "@/constant/contents";
import { IMAGES_PATH } from "@/constant/path";
import { R_SPACING2 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import {
  Box,
  Center,
  Circle,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconLighter } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Container from "./Container";

function generateRandomTextForViewport(): string {
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\t\n\r\x0b\x0c";
  const charsLength = allChars.length;

  const charWidth = 10; // approx char per pixel
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const numCharsWidth = Math.floor(viewportWidth / charWidth);
  const numCharsHeight = Math.floor(viewportHeight / charWidth);

  const totalChars = numCharsWidth * numCharsHeight;

  let randomText = "";
  for (let i = 0; i < totalChars; i++) {
    const randomIndex = Math.floor(Math.random() * charsLength);
    randomText += allChars[randomIndex];
  }

  return randomText;
}

const BgGila = () => {
  const [text, setText] = useState(generateRandomTextForViewport());

  useEffect(() => {
    const interval = setInterval(() => {
      setText(generateRandomTextForViewport());
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      w={"100%"}
      h={"100%"}
      overflow={"clip"}
      flex={1}
      position={"absolute"}
      className="radial-mask"
      zIndex={2}
    >
      <Text
        color={"#101010"}
        // opacity={0.2}
        wordBreak={"break-all"}
        overflow={"hidden"}
      >
        {text}
      </Text>
    </Box>
  );
};

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: any) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0-23 to 1-12 format
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero to minutes

    return `${hours}:${minutesStr} ${ampm}`;
  };

  return (
    <HStack justify={["start", null, null, "end"]}>
      <Text fontSize={"4xl"} fontWeight={"semibold"}>
        {formatTime(clock)}
      </Text>
    </HStack>
  );
};

const Hero = () => {
  const { lang } = useLang();
  const [lighter, setLighter] = useState(false);
  // const [lightPos, setLightPos] = useState({ x: 0, y: 0 });
  // const [hover, setHover] = useState(false);
  // function handleMouseMove(e: MouseEvent) {
  //   if (hover) {
  //     setLightPos({
  //       x: e.clientX - 50,
  //       y: e.clientY - 50,
  //     });
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [hover]);

  return (
    <CContainer
      h={["", null, null, null, "100vh"]}
      maxH={["", null, null, null, "1200px"]}
      bg={"dark"}
      overflow={"clip"}
      position={"relative"}
      // onMouseEnter={() => {
      //   setHover(true);
      // }}
      // onMouseLeave={() => {
      //   setHover(false);
      // }}
    >
      {/* {lighter && hover && (
        <Circle
          w={"100px"}
          h={"100px"}
          bg={"dt"}
          position={"fixed"}
          top={`${lightPos.y}px`}
          left={`${lightPos.x}px`}
          zIndex={1}
        />
      )} */}

      <BgGila />

      <Container zIndex={3} flex={1} px={0} p={R_SPACING2}>
        <VStack flex={1} px={4} py={40} justify={"center"}>
          <Center position={"relative"}>
            <Image
              alt="Exium"
              src={`${IMAGES_PATH}/exium.png`}
              maxW={["100%", null, "60%"]}
            />
          </Center>

          <HStack color={"dt"} mt={4} gap={4}>
            <Heading5>#Creative</Heading5>
            <Heading5>#Innovative</Heading5>
            <Heading5>#Vissionary</Heading5>
          </HStack>
        </VStack>

        <SimpleGrid columns={[1, null, 2]} gap={20}>
          <CContainer gap={2} color={"light"} align={"start"}>
            <HStack mb={4} gap={4}>
              <Rating rating={contents.home.hero.averageRating.value} />

              <CContainer>
                <Text>{contents.home.hero.averageRating.label[lang]}</Text>
              </CContainer>
            </HStack>

            <Text fontSize={"2xl"} mt={"auto"}>
              {contents.home.hero.intro[lang]}
            </Text>
          </CContainer>

          <CContainer color={"light"} align={["start", null, "end"]}>
            <Text fontSize={"xl"} textAlign={["left", null, null, "right"]}>
              Semarang, Indonesia
            </Text>

            <HStack>
              <Circle
                w={"8px"}
                h={"8px"}
                bg={"p.500"}
                animation={"fade-in 1s infinite"}
                ml={"auto"}
              />
              <Clock />
            </HStack>

            <Text
              fontSize={"2xl"}
              textAlign={["left", null, null, "right"]}
              fontWeight={"medium"}
            >
              GMT+7
            </Text>

            <BButton
              mt={4}
              onClick={() => {
                setLighter((ps) => !ps);
              }}
              bg={lighter ? "p.500" : "white"}
              color={lighter ? "white" : "dark"}
            >
              <Icon>
                <IconLighter />
              </Icon>
              Lighter
            </BButton>
          </CContainer>
        </SimpleGrid>
      </Container>
    </CContainer>
  );
};

export default Hero;
