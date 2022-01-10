import React from "react";

import { UserCard } from "./UserCard";

const NoUsersMessage = () => {
	return <div>{"No active users :("}</div>;
};

export const ActiveUsers = ({ users }) => {
	const hasUsers = !!users.length;

	return (
		<div>
			{hasUsers ? (
				users.map((user) => {
					return <UserCard user={user} />;
				})
			) : (
				<NoUsersMessage />
			)}
		</div>
	);
};
