import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
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
  Center,
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
  const content = contents.home.services;

  return (
    <CContainer py={20} bg={"dark"} color={"light"}>
      <Container mb={12}>
        <Grid
          gap={R_SPACING3}
          templateColumns={["repeat(1, 1fr)", null, null, "repeat(4, 1fr)"]}
        >
          <GridItem position={"relative"}>
            <Center
              py={4}
              bg={"p.500"}
              color={"light"}
              position={"absolute"}
              rotate={"-6deg"}
            >
              <Heading1 fontSize={"4xl"} fontWeight={"medium"}>
                {content.tag[lang]}
              </Heading1>
            </Center>

            <Heading5 mt={28} ml={2} color={"fg.subtle"}>
              {content.title[lang]}
            </Heading5>
          </GridItem>

          <GridItem colSpan={3}>
            <Text fontSize={"2xl"}>{content.intro[lang]}</Text>
          </GridItem>
        </Grid>
      </Container>

      <CContainer
        borderTop={"1px solid"}
        borderBottom={["none", null, null, "1px solid"]}
        borderColor={"d3 !important"}
      >
        <Container px={0}>
          <SimpleGrid columns={[1, 2, null, 4]}>
            {contents.services.list.map((service, i) => (
              <CContainer
                key={i}
                borderLeft={[
                  "",
                  i % 2 !== 0 ? "1px solid" : "",
                  i !== 0 ? "1px solid" : "",
                ]}
                borderBottom={["1px solid", null, null, "none"]}
                borderColor={"d3 !important"}
                pt={7}
                pb={8}
                px={[4, 8]}
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
                      {content.solutionLabel[lang]}
                    </Text>
                  </HStack>

                  <Text fontSize={"1rem"} fontWeight={"medium"}>
                    {service.solution[lang]}
                  </Text>
                </CContainer>

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
            {content.cta[lang]}
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
