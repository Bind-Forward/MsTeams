// this fxn is not applicabel on phone. It helps user to screen share

import React, { useState } from "react";
import { LocalVideoTrack } from "twilio-video";
import LocalScreenSharingPreview from "./LocalScreenSharingPreview";
import classes from "../RoomPage.module.css";

const SwitchToScreenSharingButton = ({ room }) => {
	const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
	const [screenShareTrack, setScreenShareTrack] = useState(null);
	const [screenShareStream, setScreenShareStream] = useState(null);

	// if the button is pressed user share the screen
	const handleScreenSharingEnabling = () => {
		// handle screen sharing
		if (!isScreenSharingActive) {
			navigator.mediaDevices
				.getDisplayMedia()
				.then((stream) => {
					setScreenShareStream(stream);
					setIsScreenSharingActive(true);
					const screenTrack = new LocalVideoTrack(stream.getVideoTracks()[0], {
						name: "screen-share-track",
					});

					room.localParticipant.publishTrack(screenTrack);
					setScreenShareTrack(screenTrack);

					//event listener for chrome based web browsers popup
					stream.getVideoTracks()[0].onended = () => {
						room.localParticipant.unpublishTrack(screenTrack);
						setScreenShareTrack(null);
						setIsScreenSharingActive(false);
					};
				})
				.catch((err) => {
					console.log("could not get an access to share screen", err);
				});
		} else {
			screenShareTrack.stop();
			room.localParticipant.unpublishTrack(screenShareTrack);
			setScreenShareTrack(null);
			setIsScreenSharingActive(false);
		}
	};

	return (
		<>
			<div className={`${classes.video_button_container} ${classes.dis}`}>
				{!isScreenSharingActive ? (
					<img
						src="/switchToScreenSharing.svg"
						onClick={handleScreenSharingEnabling}
						className={classes.video_button_image}
						alt="ss"
					/>
				) : (
					<img
						src="/switchToScreenSharingActive.svg"
						onClick={handleScreenSharingEnabling}
						className={classes.video_button_image}
						alt="ss"
					/>
				)}
			</div>
			{isScreenSharingActive && (
				<LocalScreenSharingPreview stream={screenShareStream} />
			)}
		</>
	);
};

export default SwitchToScreenSharingButton;
