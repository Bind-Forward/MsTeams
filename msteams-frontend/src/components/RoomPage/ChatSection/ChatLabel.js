// this file enter the label of chat.

import React from "react";
import classes from "../RoomPage.module.css";

const ChatLabel = () => {
	return (
		<div className={classes.chat_label_container}>
			<p className={classes.chat_label_paragraph}>In-call Messages</p>

			<div className={classes.chat_label_paragraph_info}>
				Messages can only be seen by people in the call and are deleted when the
				call ends.
			</div>
		</div>
	);
};

export default ChatLabel;
