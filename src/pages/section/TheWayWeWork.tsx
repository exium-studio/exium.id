import CContainer from "@/components/ui-custom/CContainer";
import Heading4 from "@/components/ui-custom/Heading4";
import Heading5 from "@/components/ui-custom/Heading5";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import contents from "@/constant/contents";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import { Grid, GridItem, HStack, Icon, Text } from "@chakra-ui/react";
import Container from "./Container";
import { useLightDarkColor } from "@/constant/colors";

const TheWayWeWork = () => {
  // SX
  const lightDarkColor = useLightDarkColor();
  const { lang } = useLang();

  return (
    <CContainer py={20}>
      <Container>
        <Grid
          gap={R_SPACING3}
          templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
        >
          <GridItem>
            <Heading5 color={"fg.subtle"}>
              {contents.home.tww.title[lang]}
            </Heading5>
          </GridItem>

          <GridItem colSpan={3}>
            <Text fontSize={"1.5rem"}>{contents.home.tww.intro[lang]}</Text>

            <CContainer mt={R_SPACING2}>
              <AccordionRoot
                collapsible
                defaultValue={["0"]}
                variant={"enclosed"}
              >
                {contents.home.tww.list.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={i.toString()}
                    bg={lightDarkColor}
                  >
                    <AccordionItemTrigger
                      px={5}
                      h={"80px"}
                      indicatorPlacement="none"
                    >
                      <HStack w={"100%"} justify={"space-between"}>
                        <HStack>
                          <Heading4 mr={2}>{i + 1}.</Heading4>
                          <Heading4> {item.title[lang]}</Heading4>
                        </HStack>

                        <Icon fontSize={"4xl"}>
                          <item.icon />
                        </Icon>
                      </HStack>
                    </AccordionItemTrigger>

                    <AccordionItemContent px={R_SPACING2}>
                      <Text fontSize={"1rem"} color={"fg.muted"}>
                        {item.description[lang]}
                      </Text>
                    </AccordionItemContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
            </CContainer>
          </GridItem>
        </Grid>
      </Container>
    </CContainer>
  );
};

export default TheWayWeWork;
