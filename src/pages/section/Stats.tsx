import CContainer from "@/components/ui-custom/CContainer";
import contents from "@/constant/contents";
import { R_SPACING2 } from "@/constant/sizes";
import { Center, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Container from "./Container";
import { useLang } from "@/hooks/useLang";

const Stats = () => {
  const { lang } = useLang();

  return (
    <CContainer>
      <CContainer>
        <HStack
          py={12}
          px={16}
          gap={32}
          w={"max"}
          animation={"infinite-scroll-r 40s linear infinite"}
          _hover={{ animationPlayState: "paused" }}
        >
          {contents.clients.map((item, i) => {
            return (
              <Center key={i}>
                <Image alt={item.name} src={item.logoGray} h={"40px"} />
              </Center>
            );
          })}
          {contents.clients.map((item, i) => {
            return (
              <Center key={i}>
                <Image alt={item.name} src={item.logoGray} h={"40px"} />
              </Center>
            );
          })}
          {contents.clients.map((item, i) => {
            return (
              <Center key={i}>
                <Image alt={item.name} src={item.logoGray} h={"40px"} />
              </Center>
            );
          })}
          {contents.clients.map((item, i) => {
            return (
              <Center key={i}>
                <Image alt={item.name} src={item.logoGray} h={"40px"} />
              </Center>
            );
          })}
          {contents.clients.map((item, i) => {
            return (
              <Center key={i}>
                <Image alt={item.name} src={item.logoGray} h={"40px"} />
              </Center>
            );
          })}
          {contents.clients.map((item, i) => {
            return (
              <Center key={i}>
                <Image alt={item.name} src={item.logoGray} h={"40px"} />
              </Center>
            );
          })}
        </HStack>
      </CContainer>

      <CContainer borderTop={"1px solid"} borderColor={"gray.muted"}>
        <Container px={0}>
          <SimpleGrid columns={[1, 2, null, 4]}>
            {contents.home.stats.map((item, i) => {
              return (
                <CContainer
                  key={i}
                  borderLeft={i !== 0 ? "1px solid" : ""}
                  borderBottom={"1px solid"}
                  borderColor={"gray.muted"}
                  p={R_SPACING2}
                  // pl={i === 0 ? 0 : ""}
                  // pr={i === contents.stats.length - 1 ? 0 : ""}
                  gap={4}
                >
                  <Text fontSize={"1.5rem"}>{item.emoji}</Text>
                  <Text fontSize={"xl"} fontWeight={"medium"}>
                    {item.label[lang]}
                  </Text>
                  <Text fontWeight={"medium"} color={"fg.subtle"}>
                    {item.description[lang]}
                  </Text>
                </CContainer>
              );
            })}
          </SimpleGrid>
        </Container>
      </CContainer>
    </CContainer>
  );
};

export default Stats;
