import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading5 from "@/components/ui-custom/Heading5";
import {
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import contents from "@/constant/contents";
import { R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import {
  Badge,
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  PopoverHeader,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ArrowUpRight, Circle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Problem = () => {
  const { lang } = useLang();

  return (
    <CContainer py={20} bg={"dark"} color={"light"}>
      <Container mb={20}>
        <Grid
          gap={R_SPACING3}
          templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
        >
          <GridItem>
            <Heading5 color={"fg.subtle"}>
              {contents.home.services.title[lang]}
            </Heading5>
          </GridItem>

          <GridItem colSpan={3}>
            <Text fontSize={"1.5rem"}>
              {contents.home.services.intro[lang]}
            </Text>
          </GridItem>
        </Grid>
      </Container>

      <CContainer
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderColor={"var(--divider2)"}
      >
        <Container px={0}>
          <SimpleGrid
            columns={[1, 2, 2, 4]}
            borderLeft={"1px solid"}
            borderRight={"1px solid"}
            borderColor={"var(--divider2)"}
          >
            {contents.services.list.map((service, i) => (
              <CContainer
                key={i}
                border={"1px solid"}
                borderColor={"var(--divider2)"}
                p={[5, null, 8]}
                gap={5}
              >
                <Icon fontSize={52} color={"var(--divider-text)"}>
                  <service.icon />
                </Icon>
                <Heading5 fontWeight={"semibold"} lineHeight={"moderate"}>
                  {service.problem[lang]}
                </Heading5>

                <CContainer flex={0}>
                  <HStack mb={1}>
                    <Icon fontSize={8} color={"p.400"}>
                      <Circle weight="fill" />
                    </Icon>
                    <Text
                      fontSize={"1rem"}
                      mt={"-1px"}
                      color={"var(--divider-text)"}
                    >
                      {contents.home.services.solutionLabel[lang]}
                    </Text>
                  </HStack>

                  <Text fontSize={"1rem"} fontWeight={"medium"}>
                    {service.solution[lang]}
                  </Text>
                </CContainer>

                {/* <PopoverRoot>
                  <PopoverTrigger>
                    <Text
                      textAlign={"left"}
                      fontSize={"1rem"}
                      color={"var(--divider-text)"}
                      lineClamp={3}
                      cursor={"pointer"}
                    >
                      {service.description[lang]}
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverCloseTrigger />
                    <PopoverBody>
                      <Text lineHeight={1.6}>{service.description[lang]}</Text>
                    </PopoverBody>
                  </PopoverContent>
                </PopoverRoot> */}

                {/* Citation */}
                <HStack wrap={"wrap"} mt={"auto"}>
                  {service.notes.map((note, ii) => (
                    <PopoverRoot key={ii}>
                      <PopoverTrigger>
                        <Badge
                          className="btn-outline"
                          size={"lg"}
                          color={"light"}
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
                          <Text lineHeight={1.6}>{note.description[lang]}</Text>
                        </PopoverBody>
                      </PopoverContent>
                    </PopoverRoot>
                  ))}
                </HStack>
              </CContainer>
            ))}
          </SimpleGrid>
        </Container>
      </CContainer>

      <Box mx={"auto"}>
        <Link to={"/services"}>
          <BButton
            w={"fit"}
            size={"2xl"}
            fontSize={"1.25rem !important"}
            mt={20}
            className="btn"
            color={"white"}
            textDecor={"underline"}
          >
            {contents.home.services.cta[lang]}
            <Icon fontSize={"lg"}>
              <ArrowUpRight />
            </Icon>
          </BButton>
        </Link>
      </Box>
    </CContainer>
  );
};

export default Problem;
