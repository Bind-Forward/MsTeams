//this file handles the button of Join Page

import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./JoinRoomPage.module.css";

const JoinRoomButtons = ({
	handleJoinToRoom,
	isRoomHost,
	nameValue,
	roomIdValue,
}) => {
	//if user is host or not, if user is we'll switch the button text.
	const successButtonText = isRoomHost ? "Host" : "Join";

	const history = useHistory();

	const pushToInroductionPage = () => {
		//push to main page
		history.push("/");
	};

	//this variable is used to handle if both nameValue and roomIdValue is entered then only Join button will get enabled or it'll be disabled
	let dis = true;
	if (nameValue && roomIdValue) {
		dis = false;
	} else {
		dis = true;
	}

	if (isRoomHost && nameValue) {
		dis = false;
	}

	const cls = dis
		? classes.join_room_success_button_disable
		: classes.join_room_success_button;

	return (
		<div className={classes.join_room_buttons_container}>
			<button onClick={handleJoinToRoom} className={cls} disabled={dis}>
				{successButtonText}
			</button>
			<button
				className={classes.join_room_cancel_button}
				onClick={pushToInroductionPage}
			>
				Cancel
			</button>
		</div>
	);
};

export default JoinRoomButtons;
