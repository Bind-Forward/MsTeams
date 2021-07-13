// this handles the scrren share preview which will get displayed at left bottom.

import React, { useRef, useEffect } from "react";
import classes from "../RoomPage.module.css";

const LocalScreenSharingPreview = ({ stream }) => {
	const localPreviewRef = useRef();

	useEffect(() => {
		const video = localPreviewRef.current;

		video.srcObject = stream;

		video.onloadedmetadata = () => {
			video.play();
		};
	}, [stream]);

	return (
		<div className={classes.local_screen_share_preview}>
			<video muted autoPlay ref={localPreviewRef}></video>
		</div>
	);
};

export default LocalScreenSharingPreview;
