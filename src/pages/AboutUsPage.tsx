import CContainer from "@/components/ui-custom/CContainer";
import Heading2 from "@/components/ui-custom/Heading2";
import Heading3 from "@/components/ui-custom/Heading3";
import Heading5 from "@/components/ui-custom/Heading5";
import { BreadcrumbRoot } from "@/components/ui/breadcrumb";
import navs from "@/constant/navs";
import { IMAGES_PATH } from "@/constant/path";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import useScrollToTop from "@/hooks/useScrollToTop";
import {
  BreadcrumbCurrentLink,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { HouseSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Container from "./section/Container";
import Footer from "./section/Footer";
import contents from "@/constant/contents";
import { useLightDarkColor } from "@/constant/colors";

interface ValuesitemProps extends StackProps {
  index: number;
  item: any;
}
const ValuesItem = ({ index, item, ...props }: ValuesitemProps) => {
  const lightDarkColor = useLightDarkColor();
  const { lang } = useLang();

  return (
    <CContainer flex={0} {...props}>
      <CContainer
        p={4}
        borderRadius={8}
        border={"1px solid var(--divider3)"}
        flex={0}
        transition={"400ms"}
        _hover={{ bg: lightDarkColor }}
      >
        <HStack gap={4}>
          <Heading5 mb={"auto"} lineHeight={"1 !important"} opacity={0.4}>
            {index + 1}
          </Heading5>

          <CContainer gap={2}>
            <Text fontWeight={600}>{item.title[lang]}</Text>
            <Text color={"fg.muted"}>{item.description[lang]}</Text>
          </CContainer>
        </HStack>
      </CContainer>
    </CContainer>
  );
};

const AboutUsPage = () => {
  useScrollToTop();

  const { lang } = useLang();

  return (
    <CContainer>
      {/* Header */}
      <CContainer py={20}>
        <Container gap={R_SPACING3}>
          <BreadcrumbRoot size={"lg"} mx={"auto"}>
            <Link to={"/"}>
              <HStack>
                <Icon>
                  <HouseSimple />
                </Icon>
                <Text>{navs[0].label[lang]}</Text>
              </HStack>
            </Link>

            <BreadcrumbCurrentLink>{navs[2].label[lang]}</BreadcrumbCurrentLink>
          </BreadcrumbRoot>

          <Heading2
            fontWeight={"semibold"}
            textAlign={"center"}
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
          <Text fontSize={"1.5rem"} mb={20}>
            {contents.aboutUs.intro[lang]}
          </Text>

          <SimpleGrid columns={[1, null, 2]} gap={R_SPACING3}>
            <Text color={"fg.muted"} fontSize={"1rem"}>
              {contents.aboutUs.intro2[lang]}
            </Text>
            <Text color={"fg.muted"} fontSize={"1rem"}>
              {contents.aboutUs.intro3[lang]}
            </Text>
          </SimpleGrid>

          <SimpleGrid columns={[2, null, 4]} gap={R_SPACING2} mt={20}>
            {contents.home.stats.map((stat, i) => (
              <CContainer key={i}>
                <Text fontSize={"2rem"}>{stat.value[lang]}</Text>
                <Text fontSize={"1rem"} color={"fg.muted"}>
                  {stat.label[lang]}
                </Text>
              </CContainer>
            ))}
          </SimpleGrid>
        </Container>

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
              <Image
                key={i}
                alt="Exium Image Collase"
                src={src}
                h={"300px"}
                borderRadius={8}
              />
            ))}
            {contents.aboutUs.imagesCollase.map((src, i) => (
              <Image
                key={i}
                alt="Exium Image Collase"
                src={src}
                h={"300px"}
                borderRadius={8}
              />
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
              <Image
                key={i}
                alt="Exium Image Collase"
                src={src}
                h={"300px"}
                borderRadius={8}
              />
            ))}
            {contents.aboutUs.imagesCollase2.map((src, i) => (
              <Image
                key={i}
                alt="Exium Image Collase"
                src={src}
                h={"300px"}
                borderRadius={8}
              />
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
          bg={"var(--divider)"}
          py={20}
          // borderTop={"2px solid"}
          // borderBottom={"2px solid"}
          // borderColor={"var(--divider2)"}
        >
          <Container>
            <SimpleGrid columns={[1, null, 2]} gap={R_SPACING3} mb={R_SPACING3}>
              <Heading3 fontWeight={"semibold"}>
                {contents.aboutUs.valuesLabel[lang]}
              </Heading3>
              <Text fontSize={"1rem"} color={"fg.muted"}>
                {contents.aboutUs.valuesIntro[lang]}
              </Text>
            </SimpleGrid>

            <Stack
              flexDir={["column-reverse", null, null, "row"]}
              gap={[12, null, null, 20]}
              position={"relative"}
            >
              <CContainer
                mx={"auto"}
                id="valuesImage"
                position={["absolute", null, null, "static"]}
                opacity={[0.1, null, null, 1]}
                top={"30%"}
              >
                <Image
                  // src={`${SVGS_PATH}/ubur3d.svg`}
                  src={`${IMAGES_PATH}/ubur3d.png`}
                  w={["100%", null, null, "50%"]}
                  mx={"auto"}
                />
              </CContainer>

              <SimpleGrid
                position={["static", null, null, "absolute"]}
                top={0}
                left={0}
                columns={[1, null, null, 3]}
                h={"100%"}
                gap={2}
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
                <CContainer></CContainer>

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
