import CContainer from "@/components/ui-custom/CContainer";
import { useLang } from "@/hooks/useLang";
import { HStack, Image, StackProps, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props extends StackProps {
  data: any;
  index: number;
  setActiveWork?: any;
}

const WorkCard = ({ data, index, setActiveWork, ...props }: Props) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/work/${data.index}`);
  };
  const { lang } = useLang();
  // const [itemHover, setitemHover] = useState<number | undefined>(undefined);

  return (
    <CContainer gap={2}>
      <VStack
        bgImage={"/assets/images/works/rski_personalia/thumbnail.png"}
        bgSize={"cover"}
        bgPos={"bottom"}
        cursor={"pointer"}
        scrollSnapAlign={"center"}
        align={"stretch"}
        borderRadius={8}
        overflow={"clip"}
        className="clicky"
        transition={"200ms"}
        gap={0}
        onClick={handleOnClick}
        aspectRatio={"10/16"}
        bg={"bg.emphasized"}
        role="group"
        _hover={{ opacity: 0.6 }}
        // onMouseEnter={() => {
        //   setitemHover(index);
        // }}
        // onMouseLeave={() => {
        //   setitemHover(undefined);
        // }}
        {...props}
      >
        <Image
          alt={`${data.client.name}`}
          // src={itemHover === index ? data.thumbnail : data.thumbnail_gray}
          src={data.thumbnail}
          aspectRatio={"10/16"}
          w={"100%"}
          objectFit={"cover"}
          objectPosition={"top"}
        />
      </VStack>

      <HStack justify={"space-between"}>
        <Text fontSize={"1rem"}>{data.title}</Text>
        <Text fontSize={"1rem"}>{data.tag[lang]}</Text>
      </HStack>
    </CContainer>
  );
};

export default WorkCard;
