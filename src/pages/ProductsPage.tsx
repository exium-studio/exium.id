import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import Container from "./section/Container";

const ProductsPage = () => {
  return (
    <CContainer flex={1}>
      <Container flex={1} minH={"500px"}>
        <Heading1 textAlign={"center"} m={"auto"}>
          Coming Soon ! Stay Tune
        </Heading1>
      </Container>
    </CContainer>
  );
};

export default ProductsPage;
