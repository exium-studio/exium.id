import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import Heading5 from "@/components/ui-custom/Heading5";
import { IMAGES_PATH } from "@/constant/path";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import { HStack, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Container from "./Container";
import contents from "@/constant/contents";

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
      <Heading5 fontWeight={"bold"}>{formatTime(clock)}</Heading5>
    </HStack>
  );
};

const Hero = () => {
  const { lang } = useLang();

  return (
    <CContainer
      h={["", null, null, "calc(100vh - 56px)"]}
      maxH={["", null, null, "900px"]}
    >
      <Container flex={1} px={0} py={R_SPACING2}>
        <SimpleGrid
          columns={[1, null, null, 3]}
          gap={R_SPACING3}
          p={R_SPACING2}
          flex={1}
        >
          <CContainer justify={"space-between"} gap={R_SPACING2}>
            <HStack gap={0}>
              <Heading1 fontWeight={"bold"} fontSize={72}>
                Exium
              </Heading1>
              <Text fontSize={"2.5rem"}>™</Text>
            </HStack>

            <HStack color={"fg.subtle"}>
              <Text fontSize={"1rem"}>#Innovative</Text>
              <Text fontSize={"1rem"}>#Vissionary</Text>
              <Text fontSize={"1rem"}>#Future</Text>
            </HStack>

            <Text fontSize={"lg"} fontWeight={"medium"} mt={"auto"}>
              {contents.home.hero.intro[lang]}
            </Text>
          </CContainer>

          <CContainer position={"relative"} my={R_SPACING2}>
            {Array.from({ length: 2 }).map((_, i) => (
              <Image
                key={i}
                alt="Exium Hero Image"
                src={`${IMAGES_PATH}/logo_graphic.png`}
                w={"100%"}
                m={"auto"}
                position={"absolute"}
                opacity={0.1}
                left={"50%"}
                transform={"translateX(-50%)"}
                zIndex={i + 1}
                animation={`hero-top-${i} infinite 8s`}
              />
            ))}

            {Array.from({ length: 2 }).map((_, i) => (
              <Image
                key={i}
                alt="Exium Hero Image"
                src={`${IMAGES_PATH}/logo_graphic.png`}
                w={"100%"}
                m={"auto"}
                position={"absolute"}
                opacity={0.1}
                left={"50%"}
                transform={"translateX(-50%)"}
                zIndex={i + 1}
                animation={`hero-bottom-${i} infinite 8s`}
              />
            ))}

            {/* Main image */}
            <Image
              alt="Exium Hero Image"
              src={`${IMAGES_PATH}/logo_graphic.png`}
              w={"100%"}
              m={"auto"}
              zIndex={15}
            />
          </CContainer>

          <CContainer gap={R_SPACING2}>
            <CContainer gap={2}>
              <Heading5
                textAlign={["left", null, null, "right"]}
                color={"fg.muted"}
                fontWeight={"medium"}
              >
                Semarang, Indonesia
              </Heading5>

              <Clock />

              <Heading5
                textAlign={["left", null, null, "right"]}
                color={"fg.muted"}
                fontWeight={"medium"}
              >
                GMT+7
              </Heading5>
            </CContainer>

            <CContainer
              flex={0}
              align={["start", null, null, "end"]}
              mt={"auto"}
            >
              {contents.sosmeds.list.map((sosmed, i) => (
                <BButton
                  key={i}
                  variant={"plain"}
                  px={0}
                  fontSize={"1rem !important"}
                  _hover={{ color: "p.500" }}
                  textDecor={"underline"}
                >
                  {sosmed.name}
                </BButton>
              ))}
            </CContainer>

            <HStack
              flexDir={["column-reverse", null, null, "row"]}
              gap={5}
              align={["start", null, null, "center"]}
            >
              <Text
                textAlign={"right"}
                flex={["", null, null, "1 1 150px"]}
                minW={"100px"}
                color={"fg.subtle"}
                fontSize={"1rem"}
              >
                {contents.home.hero.ctaDescription[lang]}
              </Text>

              <BButton
                minW={"160px"}
                h={"52px"}
                px={6}
                size={"xl"}
                fontSize={"1rem !important"}
                flex={["", null, null, "1 1 150px"]}
              >
                {contents.home.hero.cta[lang]}
                <Icon fontSize={"lg"}>
                  <ArrowRight />
                </Icon>
              </BButton>
            </HStack>
          </CContainer>
        </SimpleGrid>
      </Container>
    </CContainer>
  );
};

export default Hero;
