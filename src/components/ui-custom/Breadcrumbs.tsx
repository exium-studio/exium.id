import { HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface Props extends StackProps {
  links: any[];
}
const Breadcrumbs = ({ links, ...props }: Props) => {
  return (
    <HStack wrap={"wrap"} {...props}>
      {links.map((item, i) => {
        return (
          <Link key={i} to={item.path}>
            <HStack color={"fg.subtle"}>
              <Icon>
                {item.icon ? (
                  <item.icon size={"16px"} />
                ) : (
                  <IconChevronRight size={"16px"} />
                )}
              </Icon>
              <Text fontSize={"sm"}>{item.label}</Text>
            </HStack>
          </Link>
        );
      })}
    </HStack>
  );
};

export default Breadcrumbs;
