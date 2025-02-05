import CContainer from "@/components/ui-custom/CContainer";
import { StackProps } from "@chakra-ui/react";
import TopNav from "./TopNav";

type Props = {
  children?: any;
  activeNavIndex?: number;
  withNav?: boolean;
} & StackProps;
const PageContainer = ({ children, activeNavIndex, withNav = true }: Props) => {
  return (
    <CContainer minH={"100dvh"}>
      {withNav && <TopNav activeNavIndex={activeNavIndex} />}

      <CContainer minH={`100dvh`}>{children}</CContainer>
    </CContainer>
  );
};

export default PageContainer;
