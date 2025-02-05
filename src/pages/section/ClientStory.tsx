import CContainer from "@/components/ui-custom/CContainer";
import Heading4 from "@/components/ui-custom/Heading4";
import { Avatar } from "@/components/ui/avatar";
import contents from "@/constant/contents";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft, ArrowRight, Quotes } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import Container from "./Container";

const ClientStory = () => {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselContaier = useRef<HTMLDivElement>(null);

  return (
    <CContainer py={20} bg={"var(--divider)"}>
      <CContainer
        fRef={carouselContaier}
        overflowX={"auto"}
        className="noScroll"
        scrollBehavior={"smooth"}
        scrollSnapType={"x mandatory"}
      >
        <HStack w={"max"}>
          {contents.clientStories.map((item, i) => (
            <Box key={i} w={"100vw"} scrollSnapAlign={"center"}>
              <Container>
                <Grid
                  gap={R_SPACING3}
                  templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
                >
                  <GridItem>
                    <CContainer h={"100%"} gap={R_SPACING2}>
                      <Avatar name={item.name} src={item.image} size={"2xl"} />
                      <CContainer gap={2}>
                        <Heading4 fontWeight={"semibold"}>{item.name}</Heading4>
                        <Text fontSize={"1rem"} color={"fg.subtle"}>
                          {item.title}
                        </Text>
                      </CContainer>

                      <Box mt={"auto"}>
                        {/* <Rating value={item.rating} size={"lg"} /> */}
                      </Box>
                    </CContainer>
                  </GridItem>

                  <GridItem colSpan={3}>
                    <HStack align={"start"} gap={4}>
                      <Icon
                        fontSize={"2xl"}
                        color={"fg.muted"}
                        transform={"rotate(180deg)"}
                      >
                        <Quotes />
                      </Icon>

                      <Text fontSize={"1.5rem"}>{item.quote[lang]}</Text>
                    </HStack>
                  </GridItem>
                </Grid>
              </Container>
            </Box>
          ))}
        </HStack>
      </CContainer>

      <Container>
        <Grid
          gap={R_SPACING3}
          templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
        >
          <GridItem></GridItem>

          <GridItem colSpan={3}>
            <CContainer mt={R_SPACING3}>
              <HStack wrap={"wrap"} justify={"space-between"}>
                <Text fontSize={"1.25rem"} fontWeight={"semibold"}>
                  {activeIndex + 1}/{contents.clientStories.length}
                </Text>

                {/* Carousel Control */}
                <HStack>
                  <IconButton
                    borderRadius={"full"}
                    className="btn-solid"
                    color={"current"}
                    onClick={() => {
                      if (activeIndex > 0) {
                        setActiveIndex((ps) => ps - 1);
                        if (carouselContaier.current) {
                          carouselContaier.current.scrollLeft += -1000;
                        }
                      }
                    }}
                    disabled={activeIndex === 0}
                  >
                    <Icon fontSize={"lg"}>
                      <ArrowLeft />
                    </Icon>
                  </IconButton>

                  <IconButton
                    borderRadius={"full"}
                    className="btn-solid"
                    color={"current"}
                    onClick={() => {
                      if (activeIndex < contents.clientStories.length - 1) {
                        setActiveIndex((ps) => ps + 1);
                        if (carouselContaier.current) {
                          carouselContaier.current.scrollLeft += 1000;
                        }
                      }
                    }}
                    disabled={activeIndex === contents.clientStories.length - 1}
                  >
                    <Icon fontSize={"lg"}>
                      <ArrowRight />
                    </Icon>
                  </IconButton>
                </HStack>
              </HStack>
            </CContainer>
          </GridItem>
        </Grid>
      </Container>
    </CContainer>
  );
};

export default ClientStory;
