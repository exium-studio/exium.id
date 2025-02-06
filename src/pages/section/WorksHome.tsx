import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import contents from "@/constant/contents";
import { R_SPACING2 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import { Box, Center, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Container from "./Container";

const WorksHome = () => {
  const { lang } = useLang();

  const work_1 = contents.works.list[1];
  const work_2 = contents.works.list[2];
  const work_3 = contents.works.list[3];
  const work_4 = contents.works.list[0];

  return (
    <CContainer py={20}>
      <Container px={0}>
        <Box w={"fit"} position={"relative"} px={4} mx={"auto"} mb={12}>
          <Heading1
            fontWeight={"semibold"}
            textAlign={["left", null, "center"]}
            mb={4}
          >
            {contents.home.works.title[lang]}
          </Heading1>

          <Text color={"fg.muted"} textAlign={["left", null, "center"]}>
            {contents.works.summary[lang]}
          </Text>

          <Center
            bg={"p.500"}
            color={"light"}
            px={4}
            py={1}
            position={"absolute"}
            top={["-30px", null, "-30px"]}
            right={["100px", null, "200px"]}
            rotate={"-6deg"}
            // borderRadius={6}
          >
            <Text fontSize={"2xl"} fontWeight={"4edium"}>
              10+
            </Text>
          </Center>
        </Box>
      </Container>

      <CContainer gap={12}>
        <CContainer gap={12} overflow={"clip"}>
          <CContainer flex={1} align={"center"} bg={"d1"} py={12}>
            <Image
              alt={work_1.title}
              src={work_1.featuredImage}
              objectFit={"cover"}
              w={"full"}
            />
          </CContainer>

          <Container px={0}>
            <CContainer flex={1} px={R_SPACING2} gap={2}>
              <Text fontWeight={"medium"} color={"fg.muted"}>
                {work_1.title}
              </Text>

              <Text fontSize={"2xl"} fontWeight={"medium"} maxW={"420px"}>
                {work_1.summary[lang]}
              </Text>

              <Link to={`/work/${work_1.index}`}>
                <BButton w={"fit"} size={"sm"} variant={"outline"} mt={2}>
                  {contents.home.works.detailWorkLabel[lang]}
                  <Icon>
                    <ArrowRight />
                  </Icon>
                </BButton>
              </Link>
            </CContainer>
          </Container>
        </CContainer>

        <Container px={0}>
          <SimpleGrid columns={[1, null, 2]} gap={[12, null, 0]}>
            <CContainer gap={12} overflow={"clip"}>
              <CContainer flex={1} align={"center"} bg={"d1"} pt={8}>
                <Image
                  alt={work_2.title}
                  src={work_2.featuredImage}
                  objectFit={"cover"}
                  objectPosition={"top"}
                  w={"full"}
                  aspectRatio={16 / 10}
                />
              </CContainer>

              <CContainer flex={1} px={R_SPACING2} gap={2}>
                <Text fontWeight={"medium"} color={"fg.muted"}>
                  {work_2.title}
                </Text>

                <Text fontSize={"2xl"} fontWeight={"medium"} maxW={"420px"}>
                  {work_2.summary[lang]}
                </Text>

                <Link to={`/work/${work_2.index}`}>
                  <BButton w={"fit"} size={"sm"} variant={"outline"} mt={2}>
                    {contents.home.works.detailWorkLabel[lang]}
                    <Icon>
                      <ArrowRight />
                    </Icon>
                  </BButton>
                </Link>
              </CContainer>
            </CContainer>

            <CContainer gap={12} overflow={"clip"} mt={["", null, "200px"]}>
              <CContainer flex={1} align={"center"} bg={"d1"} p={12}>
                <Image
                  alt={work_3.title}
                  src={work_3.featuredImage}
                  objectFit={"contain"}
                  w={"full"}
                  aspectRatio={16 / 10}
                />
              </CContainer>

              <CContainer flex={1} px={R_SPACING2} gap={2}>
                <Text fontWeight={"medium"} color={"fg.muted"}>
                  {work_3.title}
                </Text>

                <Text fontSize={"2xl"} fontWeight={"medium"} maxW={"420px"}>
                  {work_3.summary[lang]}
                </Text>

                <Link to={`/work/${work_3.index}`}>
                  <BButton w={"fit"} size={"sm"} variant={"outline"} mt={2}>
                    {contents.home.works.detailWorkLabel[lang]}
                    <Icon>
                      <ArrowRight />
                    </Icon>
                  </BButton>
                </Link>
              </CContainer>
            </CContainer>
          </SimpleGrid>
        </Container>

        <CContainer gap={12} overflow={"clip"}>
          <CContainer flex={1} align={"center"} bg={"d1"} p={12}>
            <Image
              alt={work_4.title}
              src={work_4.featuredImage}
              objectFit={"cover"}
              w={"full"}
            />
          </CContainer>

          <Container>
            <CContainer flex={1} gap={2}>
              <Text fontWeight={"medium"} color={"fg.muted"}>
                {work_4.title}
              </Text>

              <Text fontSize={"2xl"} fontWeight={"medium"} maxW={"420px"}>
                {work_4.summary[lang]}
              </Text>

              <Link to={`/work/${work_4.index}`}>
                <BButton w={"fit"} size={"sm"} variant={"outline"} mt={2}>
                  {contents.home.works.detailWorkLabel[lang]}
                  <Icon>
                    <ArrowRight />
                  </Icon>
                </BButton>
              </Link>
            </CContainer>
          </Container>
        </CContainer>
      </CContainer>
    </CContainer>
  );
};

export default WorksHome;
