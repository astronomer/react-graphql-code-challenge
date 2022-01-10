import React from "react";
import { useQuery } from "react-query";

import { getActiveUsers } from "../api";
import { ActiveUsers } from "../components";

const MainLoading = () => {
	return <span>Loading...</span>;
};

const MainError = ({ error }) => {
	return <span>Error: {error.message}</span>;
};

export const Home = () => {
	const { status, data, error } = useQuery("activeUsers", getActiveUsers);

	if (status === "loading") {
		return <MainLoading />;
	}

	if (status === "error") {
		return <MainError error={error} />;
	}

	return <ActiveUsers users={data} />;
};
