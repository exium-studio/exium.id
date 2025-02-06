import { Box, BoxProps, Text, TextProps } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props extends BoxProps {
  textProps?: TextProps;
}
const BgGila = ({ textProps, ...props }: Props) => {
  function generateRandomTextForViewport(): string {
    const allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\t\n\r\x0b\x0c";
    const charsLength = allChars.length;

    const charWidth = 10; // approx char per pixel
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const numCharsWidth = Math.floor(viewportWidth / charWidth);
    const numCharsHeight = Math.floor(viewportHeight / charWidth);

    const totalChars = numCharsWidth * numCharsHeight;

    let randomText = "";
    for (let i = 0; i < totalChars; i++) {
      const randomIndex = Math.floor(Math.random() * charsLength);
      randomText += allChars[randomIndex];
    }

    return randomText;
  }

  const [text, setText] = useState(generateRandomTextForViewport());

  useEffect(() => {
    const interval = setInterval(() => {
      setText(generateRandomTextForViewport());
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      w={"100%"}
      h={"100%"}
      overflow={"clip"}
      flex={1}
      position={"absolute"}
      className="radial-mask"
      zIndex={2}
      {...props}
    >
      <Text
        color={"#121212"}
        wordBreak={"break-all"}
        overflow={"hidden"}
        fontSize={"2xl"}
        {...textProps}
      >
        {text}
      </Text>
    </Box>
  );
};

export default BgGila;
