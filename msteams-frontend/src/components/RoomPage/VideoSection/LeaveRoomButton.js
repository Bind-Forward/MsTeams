// this handles the end button of the room

import React from "react";
import classes from "../RoomPage.module.css";

const LeaveRoomButton = ({ room }) => {
	// if it is pressed the user leaves the room, and is sent to the intro page
	const handleRoomDisconnection = () => {
		room.disconnect();
		const siteUrl = window.location.origin;
		window.location.href = siteUrl;
	};

	return (
		<div className={classes.video_button_container}>
			<img
				src="/endCall.svg"
				onClick={handleRoomDisconnection}
				className={`${classes.video_button_image} ${classes.clrRed}`}
				alt="end"
			/>
		</div>
	);
};

export default LeaveRoomButton;
