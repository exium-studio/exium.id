import Breadcrumbs from "@/components/ui-custom/Breadcrumbs";
import CContainer from "@/components/ui-custom/CContainer";
import Heading2 from "@/components/ui-custom/Heading2";
import Heading4 from "@/components/ui-custom/Heading4";
import {
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import contents from "@/constant/contents";
import navs from "@/constant/navs";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import useScrollToTop from "@/hooks/useScrollToTop";
import { Badge, Box, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import { IconSmartHome } from "@tabler/icons-react";
import Container from "./section/Container";
import Footer from "./section/Footer";

const ServicesPage = () => {
  useScrollToTop();

  const { lang } = useLang();

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
                label: navs[3].label[lang],
                path: navs[3].path,
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
            {contents.services.title[lang]}
          </Heading2>
        </Container>
      </CContainer>

      {/* Content */}
      <Container maxW={"1280px"}>
        <HStack
          wrap={"wrap"}
          align={"start"}
          justify={"center"}
          gap={8}
          mx={"auto"}
        >
          {contents.services.list.map((service, i) => (
            <CContainer
              flex={["1 1 270px", null, "0 1 270px"]}
              w={["full", null, "fit"]}
              p={R_SPACING2}
              py={12}
              bgGradient={"to-bl"}
              gradientFrom={"var(--divider)"}
              gradientTo={"var(--divider2)"}
              borderRadius={8}
              transform={`rotate(${
                (Math.floor(Math.random() * 2) + 1) *
                (Math.random() < 0.5 ? -1 : 1)
              }deg)`}
              position={"relative"}
              justify={"center"}
              align={"center"}
            >
              <Box
                borderRadius={"full"}
                w={"12px"}
                h={"12px"}
                bg={"p.500"}
                position={"absolute"}
                top={2}
                left={"50%"}
                transform={"translateX(-50%)"}
                border={"2px solid"}
                borderColor={"p.600"}
              />
              <Text fontSize={"1.1rem"} maxW={"200px"}>
                {service.problem2[lang]}
              </Text>
              <Text
                fontSize={"4rem"}
                fontWeight={"bold"}
                position={"absolute"}
                bottom={0}
                right={4}
                transform={`rotate(${
                  (Math.floor(Math.random() * 3) + 1) *
                  (Math.random() < 0.5 ? -1 : 1)
                }deg)`}
                opacity={0.05}
              >
                {i + 1}
              </Text>
            </CContainer>
          ))}
        </HStack>

        <Heading4
          fontWeight={"medium"}
          textAlign={["left", null, "center"]}
          my={20}
        >
          {contents.services.intro[lang]}
        </Heading4>
      </Container>

      <CContainer borderTop={"1px solid"} borderColor={"gray.muted"}>
        {contents.services.list.map((service, i) => (
          <CContainer borderBottom={"1px solid"} borderColor={"gray.muted"}>
            <Container px={0}>
              <Grid
                key={i}
                templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
              >
                <GridItem
                  borderBottom={["1px solid", null, ""]}
                  borderColor={"gray.muted !important"}
                >
                  <Container p={R_SPACING2} h={"100%"} justify={"center"}>
                    <HStack align={"start"} gap={4}>
                      <Text
                        fontSize={"1.25rem"}
                        fontWeight={"medium"}
                        color={"fg.subtle"}
                      >
                        {i + 1}.
                      </Text>
                      <Text fontSize={"1.25rem"} fontWeight={"medium"}>
                        {service.solution[lang]}
                      </Text>
                    </HStack>
                  </Container>
                </GridItem>

                <GridItem
                  colSpan={3}
                  borderLeft={["", null, "1px solid"]}
                  borderColor={"gray.muted !important"}
                >
                  <Container p={R_SPACING2} h={"100%"} justify={"center"}>
                    <CContainer gap={5}>
                      <Text color={"fg.muted"} lineHeight={1.8}>
                        {service.description[lang]}
                      </Text>

                      <HStack wrap={"wrap"} mt={"auto"}>
                        {service.notes.map((note, ii) => (
                          <PopoverRoot key={ii}>
                            <PopoverTrigger>
                              <Badge
                                className="btn-outline"
                                size={"lg"}
                                cursor={"pointer"}
                              >
                                {note.label[lang]}
                              </Badge>
                            </PopoverTrigger>

                            <PopoverContent>
                              <PopoverCloseTrigger />
                              <PopoverHeader>
                                <PopoverTitle fontWeight={"medium"}>
                                  {note.label[lang]}
                                </PopoverTitle>
                              </PopoverHeader>
                              <PopoverBody>
                                <Text lineHeight={1.6}>
                                  {note.description[lang]}
                                </Text>
                              </PopoverBody>
                            </PopoverContent>
                          </PopoverRoot>
                        ))}
                      </HStack>
                    </CContainer>
                  </Container>
                </GridItem>
              </Grid>
            </Container>
          </CContainer>
        ))}
      </CContainer>

      <Footer />
    </CContainer>
  );
};

export default ServicesPage;
