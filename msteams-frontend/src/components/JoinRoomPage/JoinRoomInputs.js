//This handles the name value entered which will get automatically updated with google id name.
import React from "react";

import classes from "./JoinRoomPage.module.css";

const JoinRoomInputs = (props) => {
	const { nameValue, setNameValue, roomIdValue, setRoomIdValue, isRoomHost } =
		props;

	//this handle the room id value entered
	const handleRoomIdValueChange = (event) => {
		setRoomIdValue(event.target.value);
	};

	//this handle the name entered which will automatically get updated by google id name
	const handleNameValueChange = (event) => {
		setNameValue(event.target.value);
	};

	return (
		<div className={classes.join_room_inputs_container}>
			{!isRoomHost && (
				<input
					placeholder="Enter meeting ID"
					value={roomIdValue}
					onChange={handleRoomIdValueChange}
					className={classes.join_room_input}
					required
				/>
			)}
			<input
				placeholder="Enter your Name"
				value={nameValue}
				onChange={handleNameValueChange}
				className={classes.join_room_input}
				required
			/>
		</div>
	);
};

export default JoinRoomInputs;
