// this the main file to handle the Room Page of the user

import React, { useEffect } from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { connect } from "react-redux";
import { setTwilioAccessToken } from "../../store/actions";
import { getTokenFromTwilio } from "../../utils/twilioUtils";
import Overlay from "./Overlay";
import { useHistory } from "react-router-dom";
import classes from "./RoomPage.module.css";

const RoomPage = (props) => {
	const {
		identity,
		roomId,
		isChatActive,
		isParticipantsActive,
		setTwilioAccessTokenAction,
		showOverlay,
	} = props;

	const history = useHistory();

	// if the code is matched then only user will be able to join the room
	useEffect(() => {
		if (!identity || !roomId) {
			history.push("/");
		} else {
			getTokenFromTwilio(setTwilioAccessTokenAction, identity);
		}
	}, []);

	return (
		<div className={classes.room_container}>
			{isParticipantsActive && <ParticipantsSection />}
			<VideoSection />
			{isChatActive && <ChatSection />}
			{showOverlay && <Overlay />}
		</div>
	);
};

// connecting to store
const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

// dispatching to store
const mapActionToProps = (dispatch) => {
	return {
		setTwilioAccessTokenAction: (token) =>
			dispatch(setTwilioAccessToken(token)),
	};
};

export default connect(mapStoreStateToProps, mapActionToProps)(RoomPage);
