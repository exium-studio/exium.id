import CContainer from "@/components/ui-custom/CContainer";
import Heading5 from "@/components/ui-custom/Heading5";
import BgGila from "@/components/widget/BgGila";
import Rating from "@/components/widget/Rating";
import contents from "@/constant/contents";
import { IMAGES_PATH } from "@/constant/path";
import { R_SPACING2 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import useScreen from "@/hooks/useScreen";
import {
  Center,
  Circle,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Container from "./Container";

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
  const { sh } = useScreen();

  return (
    <CContainer
      pt={"64px"}
      h={sh > 1020 ? "100vh" : ""}
      maxH={sh > 1020 ? "1200px" : ""}
      bg={"dark"}
      overflow={"clip"}
      position={"relative"}
    >
      <BgGila />

      <Container zIndex={3} flex={1} px={0} p={R_SPACING2} pb={12}>
        <VStack flex={1} px={4} py={"200px"} justify={"center"}>
          <Center position={"relative"}>
            <Image
              alt="Exium"
              src={`${IMAGES_PATH}/exium.png`}
              maxW={["100%", null, "60%"]}
            />
          </Center>

          <HStack
            wrap={"wrap"}
            justify={"center"}
            color={"dt"}
            mt={4}
            gapX={4}
            px={R_SPACING2}
          >
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
          </CContainer>
        </SimpleGrid>
      </Container>
    </CContainer>
  );
};

export default Hero;
