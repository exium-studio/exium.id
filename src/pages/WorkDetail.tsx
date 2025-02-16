import Breadcrumbs from "@/components/ui-custom/Breadcrumbs";
import CContainer from "@/components/ui-custom/CContainer";
import Heading3 from "@/components/ui-custom/Heading3";
import Heading4 from "@/components/ui-custom/Heading4";
import contents from "@/constant/contents";
import navs from "@/constant/navs";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import { useLang } from "@/hooks/useLang";
import { Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import { IconSmartHome } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import Container from "./section/Container";
import Footer from "./section/Footer";

const WorkDetail = () => {
  // useScrollToTop();

  const { lang } = useLang();
  const { index } = useParams();
  const data = contents.works.list[(index || 0) as number];
  const iss = useIsSmScreenWidth();

  return (
    <CContainer>
      <CContainer py={20} gap={20}>
        <Container>
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
              {
                label: data.title,
              },
            ]}
            mb={12}
          />

          <HStack
            flexDir={["column-reverse", null, "row"]}
            gap={R_SPACING2}
            justify={"space-between"}
            align={"start"}
          >
            <Heading3 fontWeight={"semibold"}>{data.summary[lang]}</Heading3>
            <Text fontSize={"1.25rem"} fontWeight={"medium"}>
              {data.tag[lang]}
            </Text>
          </HStack>
        </Container>

        <Image
          alt={`Work ${data.title} Image`}
          src={data.image_1}
          // aspectRatio={"16/10"}
          objectFit={"cover"}
          bg={"d1"}
        />

        <Container gap={12}>
          <Grid
            templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
            gap={R_SPACING3}
          >
            <GridItem>
              <CContainer gap={R_SPACING2}>
                <CContainer gap={2}>
                  <Text fontSize={"1rem"} color={"fg.subtle"}>
                    {contents.workDetail.clientLabel[lang]}
                  </Text>
                  <Image
                    alt={`Logo ${data.client.name}`}
                    src={data.client.logo}
                    h={"52px"}
                    w={"fit"}
                    objectFit={"contain"}
                  />
                  <Text fontSize={"1rem"}>{data.client.name}</Text>
                </CContainer>

                {/* <CContainer gap={2}>
                  <Text fontSize={"1rem"} color={"fg.subtle"}>
                    {contents.workDetail.problemLabel[lang]}
                  </Text>
                  <Text fontSize={"1rem"}>{data.problem[lang]}</Text>
                </CContainer> */}

                <CContainer gap={2}>
                  <Text fontSize={"1rem"} color={"fg.subtle"}>
                    {contents.workDetail.solutionLabel[lang]}
                  </Text>

                  {iss && (
                    <CContainer gap={1}>
                      {data.solution[lang].split(" | ").map((item, i) => {
                        return <Text key={i}>{item}</Text>;
                      })}
                    </CContainer>
                  )}

                  {!iss && <Text fontSize={"1rem"}>{data.solution[lang]}</Text>}
                </CContainer>

                <CContainer gap={2}>
                  <Text fontSize={"1rem"} color={"fg.subtle"}>
                    {contents.workDetail.durationLabel[lang]}
                  </Text>
                  <Text fontSize={"1rem"}>{data.duration[lang]}</Text>
                </CContainer>
              </CContainer>
            </GridItem>

            <GridItem colSpan={3}>
              <CContainer gap={5}>
                <Heading3 fontWeight={"semibold"}>
                  {contents.works.backgroundLabel[lang]}
                </Heading3>

                {data.background.map((content, i) => (
                  <Text key={i} fontSize={"1rem"} lineHeight={1.8}>
                    {content[lang]}
                  </Text>
                ))}
              </CContainer>
            </GridItem>
          </Grid>

          <Image
            alt={`Work ${data.title} Image`}
            src={data.image_2}
            // aspectRatio={"16/10"}
            objectFit={"cover"}
            bg={"d1"}
            borderRadius={8}
          />

          {/* Narratives */}
          {data.narratives.map((narrative, i) => (
            <Grid
              key={i}
              templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
              gap={R_SPACING2}
            >
              <GridItem>
                <Heading4 maxW={["", null, "300px"]} fontWeight={"semibold"}>
                  {narrative.title[lang]}
                </Heading4>
              </GridItem>

              <GridItem colSpan={3}>
                <CContainer gap={5}>
                  {narrative.contents.map((content, ii) => (
                    <Text
                      key={ii}
                      fontSize={"1rem"}
                      lineHeight={1.8}
                      color={"fg.muted"}
                    >
                      {content[lang]}
                    </Text>
                  ))}
                </CContainer>
              </GridItem>
            </Grid>
          ))}
        </Container>
      </CContainer>

      <Footer />
    </CContainer>
  );
};

export default WorkDetail;
