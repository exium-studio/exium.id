import { R_SPACING2 } from "@/constant/sizes";
import { StackProps, VStack } from "@chakra-ui/react";

interface Props extends StackProps {
  children?: any;
  fRef?: any;
}

export default function Container({ children, fRef, ...props }: Props) {
  return (
    <VStack
      ref={fRef}
      className="container"
      flex={0}
      gap={0}
      px={R_SPACING2}
      w={"100%"}
      maxW={"1440px"}
      mx={"auto"}
      align={"stretch"}
      {...props}
    >
      {children}
    </VStack>
  );
}
