import React from "react";
import { useQuery } from "react-query";
import { Box, Center, Spinner } from "@chakra-ui/react";

import { getActiveUsers } from "../api";
import { ActiveUsers, AppHeading, BasicMessage } from "../components";

function parseUsers(resp) {
  const { data } = resp;
  if (data && data.data && data.data.users) {
    return data.data.users;
  } else {
    return [];
  }
}

const MainLoading = () => {
  return (
    <Center>
      <Spinner color={"blue.800"} size="xl" />
      <BasicMessage text={"Loading..."} />
    </Center>
  );
};

export const Content = ({ status, users }) => {
  if (status === "loading ") {
    return <MainLoading />;
  }

  if (status === "error") {
    return (
      <BasicMessage text={"Sorry, something went wrong. Try again later."} />
    );
  }

  return <ActiveUsers users={users} />;
};

export const Home = (props) => {
  const resp = useQuery("activeUsers", getActiveUsers);
  const users = parseUsers(resp);

  return (
    <Box
      bg="tomato"
      h={window.innerHeight}
      borderWidth="4px"
      borderColor="blue.800"
    >
      <AppHeading />
      <Content users={users} status={resp.status} />
    </Box>
  );
};
