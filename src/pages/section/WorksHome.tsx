import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading3 from "@/components/ui-custom/Heading3";
import contents from "@/constant/contents";
import { responsiveSpacing, responsiveSpacing2 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import {
  Grid,
  GridItem,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Container from "./Container";

const WorksHome = () => {
  const { lang } = useLang();

  const work_1 = contents.works.list[3];
  const work_2 = contents.works.list[1];
  const work_3 = contents.works.list[0];
  const work_4 = contents.works.list[2];
  const work_5 = contents.works.list[3];

  return (
    <CContainer py={20} bg={"var(--divider)"}>
      <Container>
        <Grid
          templateRows={["repeat(1, 1fr)", null, null, "repeat(4, 1fr)"]}
          templateColumns={["repeat(1, 1fr)", null, null, "repeat(4, 1fr)"]}
          gap={5}
        >
          {/* Header */}
          <GridItem>
            <CContainer gap={responsiveSpacing} h={"100%"}>
              <Heading3 fontWeight={"semibold"}>
                {contents.home.works.title[lang]}
              </Heading3>

              {/* <Text color={"fg.muted"}>{contents.home.works.intro[lang]}</Text> */}

              <Link to={"/works"}>
                <BButton
                  fontSize={"1rem !important"}
                  size={"xl"}
                  h={"52px"}
                  w={"fit"}
                >
                  {contents.home.works.cta[lang]}
                  <Icon fontSize={"lg"}>
                    <ArrowUpRight />
                  </Icon>
                </BButton>
              </Link>
            </CContainer>
          </GridItem>

          {/* 1 */}
          <GridItem colSpan={[1, null, null, 3]}>
            <SimpleGrid
              columns={[1, null, 2]}
              minH={"100%"}
              borderRadius={8}
              bg={"var(--divider)"}
              transition={"200ms"}
              _hover={{
                bg: `${work_1.color}40`,
              }}
              gap={responsiveSpacing2}
              overflow={"clip"}
            >
              <CContainer
                flex={1}
                p={[5, null, null, 8]}
                gap={5}
                justify={"center"}
              >
                <Text fontSize={"1.25rem"} fontWeight={"semibold"}>
                  {work_1.title}
                </Text>

                <Text fontSize={"sm"} color={"fg.muted"}>
                  {work_1.summary[lang]}
                </Text>

                <Link to={`/work/${work_1.index}`}>
                  <BButton
                    w={"fit"}
                    size={"sm"}
                    variant={"outline"}
                    className="btn-outline"
                  >
                    {contents.home.works.detailWorkLabel[lang]}
                    <Icon>
                      <ArrowUpRight />
                    </Icon>
                  </BButton>
                </Link>
              </CContainer>

              <CContainer
                maxH={"340px"}
                flex={1}
                align={"center"}
                p={responsiveSpacing}
              >
                <Image
                  alt={work_1.title}
                  src={work_1.featuredImage}
                  objectFit={"contain"}
                  w={"100%"}
                />
              </CContainer>
            </SimpleGrid>
          </GridItem>

          {/* 2 */}
          <GridItem rowSpan={[1, null, null, 2]} colSpan={[1, null, null, 2]}>
            <CContainer
              borderRadius={8}
              bg={"var(--divider)"}
              transition={"200ms"}
              _hover={{
                bg: `${work_4.color}40`,
              }}
              gap={responsiveSpacing2}
              overflow={"clip"}
            >
              <CContainer flex={1} p={[5, null, null, 8]} gap={5}>
                <Text fontSize={"1.25rem"} fontWeight={"semibold"}>
                  {work_2.title}
                </Text>

                <Text fontSize={"sm"} color={"fg.muted"}>
                  {work_2.summary[lang]}
                </Text>

                <Link to={`/work/${work_2.index}`}>
                  <BButton
                    w={"fit"}
                    size={"sm"}
                    variant={"outline"}
                    className="btn-outline"
                  >
                    {contents.home.works.detailWorkLabel[lang]}
                    <Icon>
                      <ArrowUpRight />
                    </Icon>
                  </BButton>
                </Link>
              </CContainer>

              <CContainer maxH={"340px"} flex={1} align={"center"}>
                <Image
                  alt={work_2.title}
                  src={work_2.featuredImage}
                  objectFit={"cover"}
                  w={"100%"}
                />
              </CContainer>
            </CContainer>
          </GridItem>

          {/* 3 */}
          <GridItem rowSpan={[1, null, null, 2]}>
            <CContainer
              h={"100%"}
              borderRadius={8}
              bg={"var(--divider)"}
              transition={"200ms"}
              _hover={{
                bg: `${work_4.color}40`,
              }}
              gap={responsiveSpacing2}
              overflow={"clip"}
            >
              <CContainer flex={1} p={[5, null, null, 8]} gap={5}>
                <Text fontSize={"1.25rem"} fontWeight={"semibold"}>
                  {work_3.title}
                </Text>

                <Text fontSize={"sm"} color={"fg.muted"}>
                  {work_3.summary[lang]}
                </Text>

                <Link to={`/work/${work_3.index}`}>
                  <BButton
                    w={"fit"}
                    size={"sm"}
                    variant={"outline"}
                    className="btn-outline"
                  >
                    {contents.home.works.detailWorkLabel[lang]}
                    <Icon>
                      <ArrowUpRight />
                    </Icon>
                  </BButton>
                </Link>
              </CContainer>

              <CContainer flex={1} align={"center"} p={[5, null, null, 8]}>
                <Image
                  alt={work_3.title}
                  src={work_3.featuredImage}
                  objectFit={"contain"}
                  flex={1}
                />
              </CContainer>
            </CContainer>
          </GridItem>

          {/* 4 */}
          <GridItem rowSpan={[1, null, null, 3]}>
            <CContainer
              h={"100%"}
              borderRadius={8}
              bg={"var(--divider)"}
              transition={"200ms"}
              _hover={{
                bg: `${work_4.color}40`,
              }}
              gap={responsiveSpacing2}
              overflow={"clip"}
            >
              <CContainer p={[5, null, null, 8]} gap={5}>
                <Text fontSize={"1.25rem"} fontWeight={"semibold"}>
                  {work_4.title}
                </Text>

                <Text fontSize={"sm"} color={"fg.muted"}>
                  {work_4.summary[lang]}
                </Text>

                <Link to={`/work/${work_4.index}`}>
                  <BButton
                    w={"fit"}
                    size={"sm"}
                    variant={"outline"}
                    className="btn-outline"
                  >
                    {contents.home.works.detailWorkLabel[lang]}
                    <Icon>
                      <ArrowUpRight />
                    </Icon>
                  </BButton>
                </Link>
              </CContainer>

              <CContainer flex={1} align={"center"}>
                <Image
                  alt={work_4.title}
                  src={work_4.featuredImage}
                  objectFit={"cover"}
                  flex={1}
                />
              </CContainer>
            </CContainer>
          </GridItem>

          {/* 5 */}
          <GridItem colSpan={[1, null, null, 3]}>
            <SimpleGrid
              columns={[1, null, 2]}
              minH={"100%"}
              borderRadius={8}
              bg={"var(--divider)"}
              transition={"200ms"}
              _hover={{
                bg: `${work_5.color}40`,
              }}
              gap={responsiveSpacing2}
              overflow={"clip"}
            >
              <CContainer
                flex={1}
                p={[5, null, null, 8]}
                gap={5}
                justify={"center"}
              >
                <Text fontSize={"1.25rem"} fontWeight={"semibold"}>
                  {work_5.title}
                </Text>

                <Text fontSize={"sm"} color={"fg.muted"}>
                  {work_5.summary[lang]}
                </Text>

                <Link to={`/work/${work_5.index}`}>
                  <BButton
                    w={"fit"}
                    size={"sm"}
                    variant={"outline"}
                    className="btn-outline"
                  >
                    {contents.home.works.detailWorkLabel[lang]}
                    <Icon>
                      <ArrowUpRight />
                    </Icon>
                  </BButton>
                </Link>
              </CContainer>

              <CContainer
                maxH={"340px"}
                flex={1}
                align={"center"}
                p={responsiveSpacing}
              >
                <Image
                  alt={work_5.title}
                  src={work_5.featuredImage}
                  objectFit={"contain"}
                  w={"100%"}
                />
              </CContainer>
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>
    </CContainer>
  );
};

export default WorksHome;
