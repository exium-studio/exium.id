import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import FeedbackNotFound from "@/components/ui-custom/FeedbackNotFound";
import Heading2 from "@/components/ui-custom/Heading2";
import {
  BreadcrumbCurrentLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import WorkCard from "@/components/widget/WorkCard";
import contents from "@/constant/contents";
import navs from "@/constant/navs";
import { R_SPACING2, R_SPACING3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import useScrollToTop from "@/hooks/useScrollToTop";
import { Box, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { HouseSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./section/Container";
import Footer from "./section/Footer";

const WorksPage = () => {
  useScrollToTop();

  const { lang } = useLang();
  const [filter, setFilter] = useState<number | undefined>(undefined);

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
        <Container gap={R_SPACING3}>
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
          <HStack wrap={"wrap"} justify={"center"} mb={R_SPACING2}>
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

          <SimpleGrid columns={[2, null, 4]} gap={5} gapY={R_SPACING2}>
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

      <Footer />
    </CContainer>
  );
};

export default WorksPage;
