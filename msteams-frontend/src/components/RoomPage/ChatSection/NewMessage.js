//this handles the new message entered by the user

import React, { useState } from "react";
import { sendMessageUsingDataChannel } from "../../../utils/twilioUtils";
import classes from "../RoomPage.module.css";

const NewMessage = () => {
	const [message, setMessage] = useState("");

	const sendMessage = () => {
		//send message to other users
		if (message) {
			sendMessageUsingDataChannel(message, true);
			setMessage("");
		}
	};

	//if pressed enter new message get displayed to the other user
	const handleKeyPressed = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			//sendMessage to other users
			if (message) sendMessage();
		}
	};

	//manages the text enter
	const handleTextChange = (event) => {
		setMessage(event.target.value);
	};

	return (
		<div className={classes.new_message_container}>
			<input
				className={classes.new_message_input}
				value={message}
				onChange={handleTextChange}
				placeholder="Type your message..."
				type="text"
				onKeyDown={handleKeyPressed}
			/>
			<img
				className={classes.new_message_button}
				src="./sendMessageButton.svg"
				onClick={sendMessage}
				alt="sendMessage"
			/>
		</div>
	);
};

export default NewMessage;
