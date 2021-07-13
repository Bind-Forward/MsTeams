//this handles the mic of the user which is on or off

import React, { useState } from "react";
import classes from "../RoomPage.module.css";

const MicButton = ({ room }) => {
	const [isMicMuted, setIsMicMuted] = useState(false);

	// mic button is handled
	const handleMicButtonPressed = () => {
		isMicMuted ? unmute() : mute();
		setIsMicMuted(!isMicMuted);
	};

	// this fxn mutes the user
	const mute = () => {
		//mute our microphone so ohter users will be not able to hear us
		room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
			localAudioTrackPublication.track.disable();
		});
	};

	// this fxn unmute the user
	const unmute = () => {
		//turn on mic back
		room.localParticipant.audioTracks.forEach((localAudioTrackPublication) => {
			localAudioTrackPublication.track.enable();
		});
	};

	return (
		<div className={classes.video_button_container}>
			{isMicMuted ? (
				<img
					src="/micOff.svg"
					onClick={handleMicButtonPressed}
					className={`${classes.video_button_image} ${classes.clsRed}`}
					alt="micOff"
				/>
			) : (
				<img
					src="/mic.svg"
					onClick={handleMicButtonPressed}
					className={classes.video_button_image}
					alt="micOn"
				/>
			)}
		</div>
	);
};

export default MicButton;
