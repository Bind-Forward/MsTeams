// this handles the chat sec of the room

import React from "react";
import { connect } from "react-redux";
import { chatbtn } from "../../../store/actions";
import classes from "../RoomPage.module.css";

const ChatBtn = ({ setIsChatActiveActions, isChatActive }) => {
	// click on chat button it gets enabled
	const handleChatingEnabling = () => {
		// handle chatting
		setIsChatActiveActions(!isChatActive);
	};

	return (
		<div className={classes.video_button_container}>
			{!isChatActive ? (
				<img
					src="/chatbtn.svg"
					className={classes.video_button_image}
					alt="chat"
					onClick={handleChatingEnabling}
				/>
			) : (
				<img
					src="/chatbtnActive.svg"
					className={classes.video_button_image}
					alt="chat"
					onClick={handleChatingEnabling}
				/>
			)}
		</div>
	);
};

//connecting to store(redux)
const mapStoreStateToProps = (state) => {
	return { ...state };
};

//dispatching to the store
const mapDispatchToProps = (dispatch) => {
	return {
		setIsChatActiveActions: (isChatActive) => dispatch(chatbtn(isChatActive)),
	};
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(ChatBtn);
