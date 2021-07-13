// this is video div of the page
import React, { useEffect } from "react";
import { connect } from "react-redux";
import RoomLabel from "./RoomLabel";
import TwilioRoom from "./TwilioRoom/TwilioRoom";
import { connectToRoom } from "../../../utils/twilioUtils";
import classes from "../RoomPage.module.css";

const Videos = ({
	room,
	setRoom,
	roomId,
	twilioAccessToken,
	onlyWithAudio,
}) => {
	useEffect(() => {
		if (twilioAccessToken) {
			connectToRoom(twilioAccessToken, roomId, setRoom);
		}
	}, [twilioAccessToken]);

	return (
		<div className={classes.videos_container}>
			<RoomLabel roomId={roomId} />
			{room && <TwilioRoom room={room} />}
		</div>
	);
};

// connecting to store
const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStoreStateToProps)(Videos);
