// this shows the participants list

import React from "react";
import { connect } from "react-redux";
import { participantsbtn } from "../../../store/actions";
import classes from "../RoomPage.module.css";

const ParticipantsBtn = ({
	setIsParticipantsActiveActions,
	isParticipantsActive,
}) => {
	//if the button is pressed the list will appear
	const handleChatingEnabling = () => {
		// handle chatting
		setIsParticipantsActiveActions(!isParticipantsActive);
	};

	return (
		<div className={classes.video_button_container}>
			{!isParticipantsActive ? (
				<img
					src="/participantsbtn.svg"
					className={classes.video_button_image}
					alt="Participants"
					onClick={handleChatingEnabling}
				/>
			) : (
				<img
					src="/participantsbtnActive.svg"
					className={classes.video_button_image}
					alt="Participants"
					onClick={handleChatingEnabling}
				/>
			)}
		</div>
	);
};

//connecting to the store
const mapStoreStateToProps = (state) => {
	return { ...state };
};

//dispatching to the store
const mapDispatchToProps = (dispatch) => {
	return {
		setIsParticipantsActiveActions: (isParticipantsActive) =>
			dispatch(participantsbtn(isParticipantsActive)),
	};
};

export default connect(
	mapStoreStateToProps,
	mapDispatchToProps
)(ParticipantsBtn);
