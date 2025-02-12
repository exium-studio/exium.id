import Breadcrumbs from "@/components/ui-custom/Breadcrumbs";
import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import Heading2 from "@/components/ui-custom/Heading2";
import Heading5 from "@/components/ui-custom/Heading5";
import contents from "@/constant/contents";
import navs from "@/constant/navs";
import { IMAGES_PATH } from "@/constant/path";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import { useLang } from "@/hooks/useLang";
import useScrollToTop from "@/hooks/useScrollToTop";
import {
  HStack,
  Image,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { IconSmartHome } from "@tabler/icons-react";
import { useState } from "react";
import Container from "./section/Container";
import Footer from "./section/Footer";

interface ValuesitemProps extends StackProps {
  index: number;
  item: any;
}
const ValuesItem = ({ index, item, ...props }: ValuesitemProps) => {
  const { lang } = useLang();
  const [solid, setSolid] = useState(false);
  function onSolid() {
    setSolid(true);
  }
  function onUnsolid() {
    setSolid(false);
  }

  return (
    <CContainer maxW={"300px"} mx={"auto"} flex={0} {...props}>
      <CContainer
        p={4}
        border={"1px solid var(--divider3)"}
        flex={0}
        transition={"400ms"}
        bg={solid ? "body" : `bodytrans`}
        onMouseEnter={onSolid}
        onMouseLeave={onUnsolid}
        onTouchStart={onSolid}
        onTouchEnd={onUnsolid}
      >
        <HStack gap={4}>
          <Heading5 mb={"auto"} lineHeight={"1 !important"} opacity={0.4}>
            {index + 1}
          </Heading5>

          <CContainer gap={2}>
            <Text fontWeight={600}>{item.title[lang]}</Text>
            <Text>{item.description[lang]}</Text>
          </CContainer>
        </HStack>
      </CContainer>
    </CContainer>
  );
};

const AboutUsPage = () => {
  useScrollToTop();

  const { lang } = useLang();
  const iss = useIsSmScreenWidth();

  return (
    <CContainer>
      {/* Header */}
      <CContainer py={20}>
        <Container gap={R_SPACING3}>
          <Breadcrumbs
            links={[
              {
                icon: IconSmartHome,
                label: navs[0].label[lang],
                path: "/",
              },
              {
                label: navs[1].label[lang],
                path: navs[1].path,
              },
            ]}
            mx={[0, null, "auto"]}
          />

          <Heading2
            fontWeight={"semibold"}
            textAlign={["left", null, "center"]}
            maxW={"600px"}
            mx={"auto"}
          >
            {contents.aboutUs.title[lang]}
          </Heading2>
        </Container>
      </CContainer>

      {/* Content */}
      <CContainer>
        <Image
          src={`${IMAGES_PATH}/team.jpg`}
          right={-12}
          bottom={-12}
          w={"100%"}
          mx={"auto"}
        />

        <Container my={20}>
          <Text fontSize={"2xl"} fontWeight={"medium"} mb={20}>
            {contents.aboutUs.intro[lang]}
          </Text>

          <SimpleGrid columns={[1, null, 2]} gap={R_SPACING3}>
            <Text color={"fg.muted"}>{contents.aboutUs.intro2[lang]}</Text>
            <Text color={"fg.muted"}>{contents.aboutUs.intro3[lang]}</Text>
          </SimpleGrid>
        </Container>

        <CContainer
          borderTop={"1px solid"}
          borderBottom={["none", null, null, "1px solid"]}
          borderColor={"gray.muted !important"}
          mb={20}
        >
          <Container px={0}>
            <SimpleGrid columns={[1, 2, null, 4]}>
              {contents.home.stats.map((item, i) => {
                return (
                  <CContainer
                    key={i}
                    borderLeft={[
                      "",
                      i % 2 !== 0 ? "1px solid" : "",
                      i !== 0 ? "1px solid" : "",
                    ]}
                    borderBottom={["1px solid", null, null, "none"]}
                    borderColor={"gray.muted !important"}
                    p={R_SPACING2}
                    gap={4}
                  >
                    <Text fontSize={"1.5rem"}>{item.emoji}</Text>
                    <Text fontSize={"xl"} fontWeight={"medium"}>
                      {item.label[lang]}
                    </Text>
                    <Text fontWeight={"medium"} color={"fg.subtle"}>
                      {item.description[lang]}
                    </Text>
                  </CContainer>
                );
              })}
            </SimpleGrid>
          </Container>
        </CContainer>

        {/* Image Collase */}
        <CContainer overflow={"clip"}>
          <HStack
            w={"max"}
            gap={5}
            mb={5}
            animation={"infinite-scroll-r 100s linear infinite"}
            _hover={{ animationPlayState: "paused" }}
          >
            {contents.aboutUs.imagesCollase.map((src, i) => (
              <Image key={i} alt="Exium Image Collase" src={src} h={"300px"} />
            ))}
            {contents.aboutUs.imagesCollase.map((src, i) => (
              <Image key={i} alt="Exium Image Collase" src={src} h={"300px"} />
            ))}
          </HStack>
        </CContainer>
        <CContainer align={"end"} overflow={"clip"}>
          <HStack
            w={"max"}
            gap={5}
            animation={"infinite-scroll-l 100s linear infinite"}
            _hover={{ animationPlayState: "paused" }}
          >
            {contents.aboutUs.imagesCollase2.map((src, i) => (
              <Image key={i} alt="Exium Image Collase" src={src} h={"300px"} />
            ))}
            {contents.aboutUs.imagesCollase2.map((src, i) => (
              <Image key={i} alt="Exium Image Collase" src={src} h={"300px"} />
            ))}
          </HStack>
        </CContainer>

        {/* Team */}
        {/* <Container>
          <SimpleGrid
            columns={[1, null, 2]}
            gap={R_SPACING3}
            mt={20}
            mb={R_SPACING3}
          >
            <Heading3 fontWeight={"semibold"}>
              {contents.aboutUs.teamLabel[lang]}
            </Heading3>
            <Text fontSize={"1rem"} color={"fg.muted"}>
              {contents.aboutUs.teamIntro[lang]}
            </Text>
          </SimpleGrid>

          <SimpleGrid columns={[2, null, 4]} gap={5} mb={20}>
            {contents.teams.map((team, i) => (
              <CContainer key={i} overflow={"clip"} gap={2}>
                <Image alt={team.name} src={team.image} borderRadius={8} />

                <CContainer>
                  <Text fontWeight={"medium"}>{team.name}</Text>
                  <Text color={"fg.subtle"}>#{team.role}</Text>
                </CContainer>
              </CContainer>
            ))}
          </SimpleGrid>
        </Container> */}

        {/* Values */}
        <CContainer
          py={20}
          // borderTop={"2px solid"}
          // borderBottom={"2px solid"}
          // borderColor={"var(--divider2)"}
        >
          <Container overflowX={"clip"}>
            <SimpleGrid columns={[1, null, 2]} gap={R_SPACING3} mb={R_SPACING3}>
              <Heading1 fontWeight={"semibold"}>
                {contents.aboutUs.valuesLabel[lang]}
              </Heading1>
              <Text fontSize={"2xl"} fontWeight={"medium"}>
                {contents.aboutUs.valuesIntro[lang]}
              </Text>
            </SimpleGrid>

            <Stack
              flexDir={["row-reverse", null, "row"]}
              gap={[12, null, 20]}
              position={"relative"}
            >
              <CContainer
                mx={"auto"}
                my={24}
                id="valuesImage"
                position={["absolute", null, "static"]}
                // opacity={[0.1, null, 1]}
                right={"-100%"}
                w={"200%"}
              >
                <Image
                  // src={`${SVGS_PATH}/ubur3d.svg`}
                  src={`${IMAGES_PATH}/ubur3d.png`}
                  w={["100%", null, "50%"]}
                  mx={"auto"}
                />
              </CContainer>

              <SimpleGrid
                position={["static", null, "absolute"]}
                top={0}
                left={0}
                w={["", null, "full"]}
                mr={"auto"}
                columns={[1, null, 3]}
                h={"100%"}
                gap={4}
                zIndex={2}
                // border={"2px solid red"}
              >
                <CContainer gap={4}>
                  {contents.aboutUs.values.map((item, i) => {
                    const ok = i % 2 === 0;

                    return (
                      ok && (
                        <ValuesItem key={i} index={i} item={item} mb={"auto"} />
                      )
                    );
                  })}
                </CContainer>

                {/* spacer */}
                {!iss && <CContainer></CContainer>}

                <CContainer gap={4}>
                  {contents.aboutUs.values.map((item, i) => {
                    const ok = i % 2 === 1;

                    return (
                      ok && (
                        <ValuesItem
                          key={i}
                          id={`values${i}`}
                          index={i}
                          item={item}
                          mt={"auto"}
                        />
                      )
                    );
                  })}
                </CContainer>
              </SimpleGrid>
            </Stack>
          </Container>
        </CContainer>
      </CContainer>

      {/* Serving client worldwide */}
      {/* <CContainer py={20} overflow={"clip"}>
        <Container position={"relative"} pb={[40, null, 0]}>
          <Image
            alt="globe outline vector"
            src={`${SVGS_PATH}/globe_outline.svg`}
            position={"absolute"}
            right={[0, null, 8]}
            bottom={["-300px", null, "-350px"]}
            w={"500px"}
          />
          <CContainer w={["", null, "50%"]} gap={5}>
            <Text fontSize={"2rem"} fontWeight={"semibold"}>
              {contents.aboutUs.serving.title[lang]}
            </Text>
            <Text>{contents.aboutUs.serving.description[lang]}</Text>
          </CContainer>
        </Container>
      </CContainer> */}

      <Footer />
    </CContainer>
  );
};

export default AboutUsPage;
