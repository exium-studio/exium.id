import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import contents from "@/constant/contents";
import navs from "@/constant/navs";
import { ASSETS_PATH, SVGS_PATH } from "@/constant/path";
import { responsiveSpacing3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import {
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { ColorModeButton } from "@/components/ui/color-mode";
import LangSwitcher from "@/components/ui-custom/LangSwitcher";

const Footer = () => {
  const { lang } = useLang();

  return (
    <CContainer bg={"dark"} color={"light"}>
      <CContainer
        bg={"p.500"}
        color={"light"}
        py={20}
        position={"relative"}
        overflow={"clip"}
      >
        <Container position={"relative"}>
          <Image
            src={`${SVGS_PATH}/ubur_light.svg`}
            position={"absolute"}
            right={-12}
            bottom={"-100px"}
            w={"280px"}
            opacity={0.2}
          />

          <SimpleGrid columns={[1, null, 2]} gap={responsiveSpacing3}>
            <CContainer gap={5}>
              <Text fontSize={"2rem"} fontWeight={"semibold"}>
                {contents.footer.cta.title[lang]}
              </Text>

              <BButton
                w={"fit"}
                variant={"plain"}
                color={"light"}
                px={0}
                fontSize={"1rem !important"}
                textDecor={"underline"}
              >
                {contents.footer.cta.buttonLabel[lang]}
                <Icon fontSize={"lg"}>
                  <ArrowUpRight />
                </Icon>
              </BButton>
            </CContainer>

            <CContainer>
              <CContainer flex={0} mt={"auto"}>
                {/* <Box h={"2px"} bg={"light"} opacity={0.1} mb={8} /> */}
                <Text fontSize={"1rem"}>{contents.footer.cta.desc[lang]}</Text>
              </CContainer>
            </CContainer>
          </SimpleGrid>
        </Container>
      </CContainer>

      {/* Footer content */}
      <CContainer position={"relative"} overflow={"clip"}>
        <CContainer py={20}>
          <Container>
            <Grid
              templateColumns={["repeat(1, 1fr)", null, null, "repeat(4, 1fr)"]}
              gap={responsiveSpacing3}
            >
              <GridItem>
                <HStack gap={4} w={"100%"}>
                  <Image
                    alt="Logo Exium"
                    src={`${ASSETS_PATH}/svgs/logo_light.svg`}
                    w={"40px"}
                  />
                  <HStack gap={0}>
                    <Heading1 fontWeight={"bold"}>Exium</Heading1>
                    <Text fontSize={"2rem"}>™</Text>
                  </HStack>
                </HStack>
              </GridItem>

              <GridItem></GridItem>

              <GridItem colSpan={2}>
                <SimpleGrid columns={[1, null, 2]} gap={responsiveSpacing3}>
                  <CContainer align={"start"} gap={2}>
                    <Text fontSize={"1rem"} color={"var(--divider-text)"}>
                      {contents.footer.navigationLabel[lang]}
                    </Text>

                    {navs.map((nav, i) => (
                      <Link key={i} to={nav.link}>
                        <Text
                          fontSize={"1.25rem"}
                          w={"fit"}
                          opacity={0.8}
                          transition={"200ms"}
                          _hover={{ color: "p.500" }}
                        >
                          {nav.label[lang]}
                        </Text>
                      </Link>
                    ))}
                  </CContainer>

                  {/* <CContainer align={"start"} gap={2}>
                    <Text fontSize={"1rem"} color={"var(--divider-text)"}>
                      {contents.footer.navigationLabel[lang]}
                    </Text>

                    {navs.map((nav, i) => (
                      <Link key={i} to={nav.link}>
                        <Text
                          fontSize={"1.25rem"}
                          w={"fit"}
                          opacity={0.8}
                          transition={"200ms"}
                          _hover={{ color: "p.500" }}
                        >
                          {nav.label[lang]}
                        </Text>
                      </Link>
                    ))}
                  </CContainer> */}

                  <CContainer align={"start"} gap={2}>
                    <Text fontSize={"1rem"} color={"var(--divider-text)"}>
                      {contents.sosmeds.label[lang]}
                    </Text>

                    {contents.sosmeds.list.map((nav, i) => (
                      <Link key={i} to={nav.disabled ? "" : nav.link}>
                        <Text
                          fontSize={"1.25rem"}
                          w={"fit"}
                          opacity={nav.disabled ? 0.4 : 0.8}
                          transition={"200ms"}
                          _hover={{ color: nav.disabled ? "" : "p.500" }}
                          cursor={nav.disabled ? "disabled" : "pointer"}
                        >
                          {nav.name}
                        </Text>
                      </Link>
                    ))}
                  </CContainer>
                </SimpleGrid>
              </GridItem>
            </Grid>
          </Container>
        </CContainer>

        <CContainer>
          <Container
            borderTop={"2px solid"}
            borderBottom={"2px solid"}
            borderColor={"var(--divider3)"}
            py={20}
          >
            <SimpleGrid columns={[1, null, 3]} gap={responsiveSpacing3}>
              <CContainer gap={2}>
                <Text fontSize={"1.25rem"}>{contents.contact.email}</Text>
                <Text fontSize={"1.25rem"}>{contents.contact.phone}</Text>
              </CContainer>

              <CContainer>
                <Text fontSize={"1.25rem"} opacity={0.4}>
                  {contents.contact.address}
                </Text>
              </CContainer>

              <CContainer align={["start", null, "end"]} justify={"center"}>
                <Link to={"https://maps.google.com"} target="_blank">
                  <HStack>
                    <Text
                      fontSize={"1.25rem"}
                      textDecor={"underline !important"}
                    >
                      {contents.footer.viewMapsLabel[lang]}
                    </Text>
                    <Icon fontSize={"lg"}>
                      <ArrowUpRight />
                    </Icon>
                  </HStack>
                </Link>
              </CContainer>
            </SimpleGrid>
          </Container>
        </CContainer>

        <CContainer py={8}>
          <Container>
            <SimpleGrid columns={[1, null, 2]} gap={responsiveSpacing3}>
              <Text fontSize={"1rem"} opacity={0.4}>
                Copyright {new Date().getFullYear()} © Exium. All right
                reserved.
              </Text>

              <HStack gap={8} justify={["start", null, "end"]}>
                <Text fontSize={"1rem"} opacity={0.4}>
                  Privacy Policy
                </Text>

                <Text fontSize={"1rem"} opacity={0.4}>
                  Term and Conditions
                </Text>

                <HStack>
                  <ColorModeButton
                    color={"white"}
                    borderRadius={"full"}
                    className={"btn"}
                    size={"lg"}
                  />

                  <LangSwitcher
                    color={"white"}
                    borderRadius={"full"}
                    size={"lg"}
                    fontSize={"1rem !important"}
                  />
                </HStack>
              </HStack>
            </SimpleGrid>
          </Container>
        </CContainer>
      </CContainer>
    </CContainer>
  );
};

export default Footer;
