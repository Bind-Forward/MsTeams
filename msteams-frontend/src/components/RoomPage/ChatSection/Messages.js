//this handles messages of the user in the room

import React from "react";
import { connect } from "react-redux";
import classes from "../RoomPage.module.css";

const Message = ({ author, content, sameAuthor, messageCreatedByMe }) => {
	const alignClass = messageCreatedByMe
		? classes.message_align_right
		: classes.message_align_left;

	// checks if the user is author or not to align the text of the user in chat section
	const authorText = messageCreatedByMe ? "You" : author;

	const contentAdditionalStyles = messageCreatedByMe
		? classes.message_right_styles
		: classes.message_left_styles;

	return (
		<div className={`${classes.message_container} ${alignClass}`}>
			{!sameAuthor && <p className={classes.message_title}>{authorText}</p>}
			<p className={`${classes.message_content} ${contentAdditionalStyles}`}>
				{content}
			</p>
		</div>
	);
};

//it loads the messages of the user
const Messages = ({ messages }) => {
	return (
		<div className={classes.messages_container}>
			{messages.map((message, index) => {
				const sameAuthor =
					index > 0 && message.identity === messages[index - 1].identity;
				return (
					<Message
						key={index}
						author={message.identity}
						content={message.content}
						sameAuthor={sameAuthor}
						messageCreatedByMe={message.messageCreatedByMe}
					/>
				);
			})}
		</div>
	);
};

//Connecting to the store
const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStoreStateToProps)(Messages);
