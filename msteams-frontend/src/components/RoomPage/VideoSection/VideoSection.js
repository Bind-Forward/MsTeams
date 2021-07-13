import React, { useState } from "react";
import VideoButtons from "./VideoButtons";
import Videos from "./Videos";
import classes from "../RoomPage.module.css";

const VideoSection = () => {
	const [room, setRoom] = useState(null);

	return (
		<div className={classes.video_section_container}>
			<Videos room={room} setRoom={setRoom} />
			<VideoButtons room={room} />
		</div>
	);
};

export default VideoSection;
