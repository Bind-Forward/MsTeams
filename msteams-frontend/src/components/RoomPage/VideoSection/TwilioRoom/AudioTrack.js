//this file handles the audio track of the application in the room

import React, { useRef, useEffect } from "react";
import classes from "../../RoomPage.module.css";

const AudioTrack = ({ track }) => {
	const trackRef = useRef();

	useEffect(() => {
		const child = track.attach();
		trackRef.current.classList.add(track.kind);
		trackRef.current.appendChild(child);
	}, []);

	return <div className={classes.track} ref={trackRef}></div>;
};

export default AudioTrack;
