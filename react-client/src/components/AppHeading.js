import React from "react";

import { Center, Heading } from "@chakra-ui/react";

export const AppHeading = () => {
  return (
    <Center borderBottomWidth="4px" borderColor="blue.800">
      <Heading color="blue.800">Current Users</Heading>
    </Center>
  );
};
