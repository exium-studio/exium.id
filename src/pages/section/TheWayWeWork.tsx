import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import contents from "@/constant/contents";
import { IMAGES_PATH, SVGS_PATH } from "@/constant/path";
import { useLang } from "@/hooks/useLang";
import { Center, HStack, Image, Text } from "@chakra-ui/react";
import Container from "./Container";

const TheWayWeWork = () => {
  const { lang } = useLang();
  const content = contents.home.tww;

  return (
    <CContainer py={20} overflowX={"clip"}>
      <Container>
        <Center mx={"auto"} mt={20} mb={40} position={"relative"}>
          <Image
            alt="Exium Graphic Logo"
            src={`${IMAGES_PATH}/logo_graphic.png`}
            maxW={"300px"}
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

        <CContainer align={"center"} gap={"20px"}>
          <CContainer>
            <HStack wrap={"wrap"} gap={12}>
              <CContainer flex={"1 1 0"} maxW={"300px"}>
                <Image alt="" src={`${SVGS_PATH}/communication.svg`} />
              </CContainer>

              <CContainer flex={"1 1 0"}>
                <Text fontSize={"xl"} fontWeight={"semibold"}>
                  {content.list[0].title[lang]}
                </Text>
              </CContainer>
            </HStack>
          </CContainer>
        </CContainer>
      </Container>
    </CContainer>
  );
};

export default TheWayWeWork;
