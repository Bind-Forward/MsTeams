// this file handles the videobutton of the room

import React from "react";
import { connect } from "react-redux";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton.js";
import LeaveRoomButton from "./LeaveRoomButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";
import ChatBtn from "./ChatBtn";
import ParticipantsBtn from "./ParticipantsBtn";
import classes from "../RoomPage.module.css";

const VideoButtons = (props) => {
	// if it is only with audio the image will not be there to enable it press the button
	const { room, connectOnlyWithAudio } = props;
	return (
		<div className={classes.video_buttons_container}>
			<MicButton room={room} />
			<CameraButton room={room} onlyWithAudio={connectOnlyWithAudio} />
			<LeaveRoomButton room={room} />
			<SwitchToScreenSharingButton room={room} />
			<ChatBtn room={room} />
			<ParticipantsBtn room={room} />
		</div>
	);
};

//connecting to store
const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStoreStateToProps)(VideoButtons);
