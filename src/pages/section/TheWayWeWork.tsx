import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import Heading3 from "@/components/ui-custom/Heading3";
import Heading4 from "@/components/ui-custom/Heading4";
import contents from "@/constant/contents";
import { IMAGES_PATH } from "@/constant/path";
import { useLang } from "@/hooks/useLang";
import { Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import Container from "./Container";
import BgGila from "@/components/widget/BgGila";
import useScreen from "@/hooks/useScreen";

const TheWayWeWork = () => {
  const { lang } = useLang();
  const content = contents.home.tww;

  const { sw } = useScreen();

  return (
    <CContainer pt={20} overflowX={"clip"}>
      <Container>
        <Center
          minW={sw > 300 ? "250px" : "100%"}
          w={"30%"}
          mx={"auto"}
          mt={20}
          mb={40}
          position={"relative"}
        >
          <Image
            alt="Exium Graphic Logo"
            src={`${IMAGES_PATH}/logo_graphic.png`}
            zIndex={2}
          />

          <Center
            px={8}
            py={4}
            bg={"d1"}
            color={"d3"}
            position={"absolute"}
            w={"100vw"}
            zIndex={1}
            minH={"100px"}
          >
            <Heading1
              fontSize={"10vw"}
              fontWeight={"semibold"}
              whiteSpace={"nowrap"}
            >
              {content.title[lang]}
            </Heading1>
          </Center>
        </Center>

        <Text
          fontSize={"2xl"}
          textAlign={["left", null, "center"]}
          maxW={"800px"}
          mx={"auto"}
          mb={40}
        >
          {contents.home.tww.intro[lang]}
        </Text>

        <CContainer align={"center"} gap={40}>
          <HStack wrap={"wrap"} gap={12}>
            <CContainer flex={"1 1 30%"}>
              <Image
                alt="Brainstorming Illustration"
                src={content.list[0].image}
              />
            </CContainer>

            <CContainer flex={"1 1 300px"} gap={4}>
              <Heading3 fontWeight={"semibold"}>
                {content.list[0].title[lang]}
              </Heading3>

              <Text>{content.list[0].description[lang]}</Text>
            </CContainer>
          </HStack>

          <HStack wrap={"wrap-reverse"} gap={12}>
            <CContainer flex={"1 1 300px"} gap={4}>
              <Heading3 fontWeight={"semibold"}>
                {content.list[1].title[lang]}
              </Heading3>

              <Text>{content.list[1].description[lang]}</Text>
            </CContainer>

            <CContainer flex={"1 1 30%"}>
              <Image alt="Designing Illustration" src={content.list[1].image} />
            </CContainer>
          </HStack>
        </CContainer>
      </Container>

      <CContainer position={"relative"}>
        <Container px={0}>
          <Box
            w={"full"}
            h={["500px", null, "900px"]}
            bgGradient={"to-b"}
            gradientFrom={"body"}
            gradientTo={"transparent"}
            position={"absolute"}
            zIndex={2}
          />
          <Center>
            <CContainer
              h={["800px", "800px"]}
              rotate={"90deg"}
              mt={[`-${500 - sw}px`, null, "35%"]}
            >
              <BgGila
                w={["200%", "150%", "100%"]}
                position={"static"}
                textProps={{ color: "dt" }}
              />
            </CContainer>
          </Center>

          <Image
            zIndex={2}
            alt="Coding Illustration"
            src={content.list[2].image}
            minH={"240px"}
          />
        </Container>

        <CContainer bg={"dark"} color={"light"} zIndex={3}>
          <Container py={12} position={"relative"} gap={4}>
            <Heading3
              fontWeight={"semibold"}
              textAlign={["left", null, "center"]}
            >
              {content.list[2].title[lang]}
            </Heading3>

            <Text
              textAlign={["left", null, "center"]}
              maxW={"600px"}
              mx={"auto"}
            >
              {content.list[2].description[lang]}
            </Text>

            <Center
              px={8}
              py={4}
              mt={12}
              mb={8}
              mx={["", null, "auto"]}
              bg={"p.500"}
              color={"light"}
              rotate={"-2deg"}
              w={"fit"}
            >
              <Heading4 fontWeight={"medium"}>
                {content.list[3].title[lang]}
              </Heading4>
            </Center>

            <Text
              color={"fg.subtle"}
              textAlign={["left", null, "center"]}
              maxW={"600px"}
              mx={"auto"}
            >
              {content.list[3].description[lang]}
            </Text>
          </Container>
        </CContainer>
      </CContainer>
    </CContainer>
  );
};

export default TheWayWeWork;
