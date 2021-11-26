import React from "react";

export default function History() {
	const event = JSON.parse(localStorage.getItem('event'));
	return (
		<>
			<h1>Recent Search</h1>
		</>
	)
}