import React from "react";
import { Avatar, GridItem, Stack, Text } from "@chakra-ui/react";

const LabelText = ({ text }) => {
  return (
    <Text color="white" fontSize="md">
      {text}
    </Text>
  );
};

export const UserCard = ({ user, imageSrc }) => {
  const { id, name, email, phone } = user;
  return (
    <GridItem w="100%" bg="blue.800">
      <Avatar
        name={`name-${id}`}
        size="2xl"
        m={2}
        float="left"
        src={imageSrc}
      />
      <Stack display="table-cell" float="left" align="center" m={4}>
        <LabelText text={name} />
        <LabelText text={email} />
        <LabelText text={phone} />
      </Stack>
    </GridItem>
  );
};
