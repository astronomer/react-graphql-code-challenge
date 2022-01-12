import React from "react";
import { Center, Text } from "@chakra-ui/react";

export const BasicMessage = ({ text }) => {
  return (
    <Center>
      <Text fontSize="3xl" m="8" color="blue.800">
        {text}
      </Text>
    </Center>
  );
};
