import CContainer from "@/components/ui-custom/CContainer";
import { StackProps } from "@chakra-ui/react";
import TopNav from "./TopNav";

interface Props extends StackProps {
  children?: any;
  activeNavIndex?: number;
  withNav?: boolean;
}
const PageContainer = ({
  children,
  activeNavIndex,
  withNav = true,
  ...props
}: Props) => {
  return (
    <CContainer minH={"100dvh"}>
      {withNav && <TopNav activeNavIndex={activeNavIndex} />}

      <CContainer minH={`100dvh`} {...props}>
        {children}
      </CContainer>
    </CContainer>
  );
};

export default PageContainer;
