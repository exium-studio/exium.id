import contents from "@/constant/contents";
import { useLang } from "@/hooks/useLang";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { IconBrandWhatsappFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import BButton from "../ui-custom/BButton";

const WAWidget = () => {
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState({ y: 16 });
  const [yBefore, setYBefore] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);

  const { lang } = useLang();

  const handleDragStart = (e: any) => {
    setDragging(true);
    // Menyimpan posisi Y sebelum drag dimulai
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;

    // Menyimpan posisi widget yang sekarang
    const startPositionY = position.y;

    const handleDragMove = (e: any) => {
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      // Hitung perubahan posisi berdasarkan perbedaan posisi awal dengan posisi baru (clientY - startY)
      let newY = startPositionY - (clientY - currentY);

      // Pastikan widget tetap berada dalam batas atas dan bawah layar
      newY = Math.max(0, Math.min(window.innerHeight - 60, newY));

      // Update posisi berdasarkan hasil perhitungan baru
      setPosition({ y: newY });
    };

    const handleDragEnd = () => {
      setDragging(false);
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchmove", handleDragMove);
    window.addEventListener("touchend", handleDragEnd);
  };

  useEffect(() => {
    if (!dragging && (yBefore === null || yBefore !== position.y)) {
      setYBefore(position.y);
    }
  }, [position, dragging]);

  const handleClick = () => {
    // Jika posisi Y tidak berubah (startY === position.y sebelum drag), buka link
    if (yBefore !== null && position.y === yBefore) {
      window.open(contents.contact.wa, "_blank");
    }
  };

  return (
    <HStack
      position="fixed"
      bottom={position.y + "px"}
      right={"16px"}
      w="fit-content"
      cursor="grab"
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      zIndex={99}
    >
      <Box
        bg="body"
        px={4}
        py={2}
        borderRadius="full"
        border="1px solid"
        borderColor="border.muted"
        visibility={hover ? "visible" : "hidden"}
        opacity={hover ? 1 : 0}
        transition="200ms"
      >
        <Text>{contents.footer.cta.buttonLabel[lang]}</Text>
      </Box>

      <BButton
        iconButton
        size="2xl"
        borderRadius="full"
        colorPalette="green"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
      >
        <Icon viewBox="0 0 24 24" w="40px" h="40px">
          <IconBrandWhatsappFilled />
        </Icon>
      </BButton>
    </HStack>
  );
};

export default WAWidget;
