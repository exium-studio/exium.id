import Breadcrumbs from "@/components/ui-custom/Breadcrumbs";
import CContainer from "@/components/ui-custom/CContainer";
import Heading3 from "@/components/ui-custom/Heading3";
import contents from "@/constant/contents";
import navs from "@/constant/navs";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import useScrollToTop from "@/hooks/useScrollToTop";
import { Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import { IconSmartHome } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import Container from "./section/Container";
import Footer from "./section/Footer";

const WorkDetail = () => {
  useScrollToTop();

  const { lang } = useLang();
  const { index } = useParams();
  const data = contents.works.list[(index || 0) as number];

  return (
    <CContainer>
      <CContainer py={20} gap={20}>
        <Container>
          <Breadcrumbs
            links={[
              {
                icon: IconSmartHome,
                label: navs[0].label[lang],
                link: "/",
              },
              {
                label: navs[1].label[lang],
                link: navs[1].path,
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
          aspectRatio={"16/10"}
          objectFit={"cover"}
        />

        <Container gap={20}>
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
                  <Text fontSize={"1rem"}>{data.solution[lang]}</Text>
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
            aspectRatio={"16/10"}
            objectFit={"cover"}
            borderRadius={8}
          />

          {data.narratives.map((narrative, i) => (
            <Grid
              key={i}
              templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
              gap={R_SPACING3}
            >
              <GridItem>
                <Heading3 maxW={["", null, "300px"]} fontWeight={"semibold"}>
                  {narrative.title[lang]}
                </Heading3>
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
