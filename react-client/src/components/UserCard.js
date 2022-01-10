import React from "react";

export const UserCard = ({ user }) => {
	const { name } = user;
	return <div>{name}</div>;
};
