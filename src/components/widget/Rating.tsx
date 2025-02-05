import { HStack, Icon, StackProps } from "@chakra-ui/react";
import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

interface Props extends StackProps {
  rating: number;
}

const Rating = ({ rating, ...props }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <HStack gap={1} {...props}>
      {[...Array(fullStars)].map((_, index) => (
        <Icon key={`full-${index}`}>
          <IconStarFilled size={"20px"} />
        </Icon>
      ))}
      {hasHalfStar && (
        <Icon key="half">
          <IconStarHalfFilled size={"20px"} />
        </Icon>
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <Icon key={`empty-${index}`}>
          <IconStarFilled size={"20px"} />
        </Icon>
      ))}
    </HStack>
  );
};

export default Rating;
