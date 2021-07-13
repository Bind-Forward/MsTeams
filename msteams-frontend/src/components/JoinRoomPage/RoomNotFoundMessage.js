//Check if room has been created or not created. If room is created and been found then only other user can join it

import React from "react";
import classes from "./JoinRoomPage.module.css";

const RoomNotFoundMessage = ({ showRoomNotFoundMessage }) => {
	return (
		<div className={classes.room_not_found_container}>
			{showRoomNotFoundMessage && (
				<p className={classes.room_not_found_paragraph}>
					Room has not been found. Please try again
				</p>
			)}
		</div>
	);
};

export default RoomNotFoundMessage;
