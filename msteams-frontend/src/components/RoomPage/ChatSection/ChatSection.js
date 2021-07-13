//this file handles the chat section of the application

import React from "react";
import ChatLabel from "./ChatLabel";
import Messages from "./Messages";
import NewMessage from "./NewMessage";
import classes from "../RoomPage.module.css";

const ChatSection = () => {
	return (
		<div className={classes.chat_section_container}>
			<ChatLabel />
			<Messages />
			<NewMessage />
		</div>
	);
};

export default ChatSection;
