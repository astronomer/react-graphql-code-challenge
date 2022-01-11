import React from "react";
import { useQuery } from "react-query";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

import { getActiveUsers } from "../api";
import { ActiveUsers, AppHeading } from "../components";

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
		<Box>
			<Text>Loading...</Text>
		</Box>
	);
};

const MainError = ({ error }) => {
	return (
		<Box>
			<Text>Error: {error.message}</Text>
		</Box>
	);
};

export const Content = ({ status, error, data, users }) => {
	if (status === "loading ") {
		return <MainLoading />;
	}

	if (status === "error") {
		return <MainError error={error} />;
	}

	return <ActiveUsers users={users} />;
};

export const Home = () => {
	const resp = useQuery("activeUsers", getActiveUsers);
	const users = parseUsers(resp);
	return (
		<Box bg="tomato">
			<AppHeading />
			<Content users={users} {...resp} />
		</Box>
	);
};
