import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "./../../src/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"87vh"}>
      <motion.div
        style={{
          height: "60vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"4xl"}
        textAlign={"center"}
        fontWeight={"semibold"}
        color={"whiteAlpha.700"}
        mt={"-13"}
      >
        "CRYPTO"
      </Text>
      <Text
        fontSize={"2xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"2"}
      >
        The Best Cryptocurrency Trading Website In Bangladesh
      </Text>
    </Box>
  );
};

export default Home;
