//this file handle if user has checked onlyWithAudio box or not

import React from "react";
import classes from "./JoinRoomPage.module.css";

const OnlyWithAudioCheckbox = (props) => {
	const { connectOnlyWithAudio, setConnectOnlyWithAudio } = props;

	//If onlyWithAudio is checked then camera is off but the light will be on as it is default behaviour of the twilio but camera track will get off
	const handleConnectionTypeChange = () => {
		setConnectOnlyWithAudio(!connectOnlyWithAudio);
	};

	return (
		<div className={classes.checkbox_container}>
			<div
				className={classes.checkbox_connection}
				onClick={handleConnectionTypeChange}
			>
				{connectOnlyWithAudio && (
					<img
						className={classes.checkbox_image}
						src="/check.png"
						alt="msteams"
					/>
				)}
			</div>
			<p className={classes.checkbox_container_paragraph}>Only Audio</p>
		</div>
	);
};

export default OnlyWithAudioCheckbox;
