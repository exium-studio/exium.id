import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading2 from "@/components/ui-custom/Heading2";
import {
  BreadcrumbCurrentLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import WorkCard from "@/components/widget/presentational/WorkCard";
import navs from "@/constant/navs";
import { responsiveSpacing2, responsiveSpacing3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import useScrollToTop from "@/hooks/useScrollToTop";
import {
  Box,
  Center,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { HouseSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./section/Container";
import Footer from "./section/Footer";
import ClientStory from "./section/ClientStory";
import contents from "@/constant/contents";
import FeedbackNotFound from "@/components/ui-custom/FeedbackNotFound";

const WorksPage = () => {
  useScrollToTop();

  const { lang } = useLang();
  const [filter, setFilter] = useState<number | undefined>(undefined);
  const [itemHover, setitemHover] = useState<number | undefined>(undefined);

  const fd = contents.works.list
    .slice()
    .reverse()
    .filter((item) => {
      const ok = filter === item.category || filter === undefined;

      return ok;
    });

  return (
    <CContainer>
      {/* Header */}
      <CContainer py={20}>
        <Container gap={responsiveSpacing3}>
          <BreadcrumbRoot size={"lg"} mx={"auto"}>
            <Link to={"/"}>
              <HStack>
                <Icon>
                  <HouseSimple />
                </Icon>
                <Text>{navs[0].label[lang]}</Text>
              </HStack>
            </Link>

            <BreadcrumbCurrentLink>{navs[1].label[lang]}</BreadcrumbCurrentLink>
          </BreadcrumbRoot>

          <Heading2
            fontWeight={"semibold"}
            textAlign={"center"}
            maxW={"600px"}
            mx={"auto"}
          >
            {contents.works.title[lang]}
          </Heading2>
        </Container>
      </CContainer>

      {/* Content */}
      <CContainer mb={20}>
        <Container>
          <HStack wrap={"wrap"} justify={"center"} mb={responsiveSpacing2}>
            <BButton
              size={"sm"}
              variant={filter === undefined ? "solid" : "subtle"}
              onClick={() => {
                setFilter(undefined);
              }}
            >
              {lang === "id" ? "Semua" : "All"}
            </BButton>
            {contents.workCategories.map((item, i) => (
              <BButton
                key={i}
                size={"sm"}
                variant={filter === i ? "solid" : "subtle"}
                onClick={() => {
                  setFilter(i);
                }}
              >
                {item[lang]}
              </BButton>
            ))}
          </HStack>

          {fd.length === 0 && <FeedbackNotFound />}

          <SimpleGrid columns={[2, null, 4]} gap={5} gapY={responsiveSpacing2}>
            {fd.map((work, i) => {
              const ok = filter === work.category || filter === undefined;

              return (
                ok && (
                  <Box className="workItem" key={i}>
                    <WorkCard data={work} index={i} />
                  </Box>
                )
              );
            })}
          </SimpleGrid>
        </Container>
      </CContainer>

      {/* Iconic client */}
      <CContainer
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderColor={"var(--divider2)"}
      >
        <Container>
          <SimpleGrid
            columns={[2, null, 6]}
            borderLeft={"1px solid"}
            borderRight={"1px solid"}
            borderColor={"var(--divider2)"}
          >
            {contents.clients.map((tech, i) => (
              <Center
                key={i}
                borderRight={
                  i < contents.techstack.length - 1 ? "2px solid" : ""
                }
                border={"1px solid"}
                borderColor={"var(--divider2)"}
                p={responsiveSpacing2}
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
                  h={"80px"}
                  maxW={"120px"}
                />
              </Center>
            ))}
          </SimpleGrid>
        </Container>
      </CContainer>
      <ClientStory />

      <Footer />
    </CContainer>
  );
};

export default WorksPage;
