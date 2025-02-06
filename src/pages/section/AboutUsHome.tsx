import CContainer from "@/components/ui-custom/CContainer";
import Heading5 from "@/components/ui-custom/Heading5";
import contents from "@/constant/contents";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import {
  Center,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Container from "./Container";

const AboutUsHome = () => {
  const { lang } = useLang();
  const [itemHover, setitemHover] = useState<number | undefined>(undefined);

  return (
    <CContainer pt={20} borderTop={"2px solid"} borderColor={"border.muted"}>
      <Container mb={20}>
        <Grid
          gap={R_SPACING3}
          templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
        >
          <GridItem>
            <Heading5 color={"fg.subtle"}>
              {contents.home.aboutUs.title[lang]}
            </Heading5>
          </GridItem>

          <GridItem colSpan={3}>
            <Text fontSize={"1.5rem"} fontWeight={"medium"} mb={20}>
              {contents.home.aboutUs.intro[lang]}
            </Text>

            <SimpleGrid columns={[2, null, 4]} gap={R_SPACING2}>
              {contents.home.stats.map((stat, i) => (
                <CContainer key={i}>
                  <Text fontSize={"2rem"}>{stat.value[lang]}</Text>
                  <Text fontSize={"1rem"} color={"fg.muted"}>
                    {stat.label[lang]}
                  </Text>
                </CContainer>
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>

      <CContainer
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderColor={"var(--divider2)"}
      >
        <Container px={0} borderColor={"var(--divider2)"}>
          <SimpleGrid
            columns={[2, null, 8]}
            borderLeft={"1px solid"}
            borderRight={"1px solid"}
            borderColor={"var(--divider2)"}
          >
            {contents.techstack.map((tech, i) => (
              <Center
                key={i}
                borderRight={
                  i < contents.techstack.length - 1 ? "2px solid" : ""
                }
                border={"1px solid"}
                borderColor={"var(--divider2)"}
                p={R_SPACING2}
                transition={"400ms"}
                _hover={{ bg: "bg.muted" }}
                onMouseEnter={() => {
                  setitemHover(i);
                }}
                onMouseLeave={() => {
                  setitemHover(undefined);
                }}
              >
                <Image
                  alt={`Logo ${tech.name}`}
                  src={itemHover === i ? tech.logo : tech.logoGray}
                  // src={tech.logo}
                  h={"50px"}
                  maxW={"120px"}
                />
              </Center>
            ))}
          </SimpleGrid>
        </Container>
      </CContainer>
    </CContainer>
  );
};

export default AboutUsHome;
