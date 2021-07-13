// this is the camera button in the room
import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "../RoomPage.module.css";

const CameraButton = ({ room, onlyWithAudio }) => {
	const [isLocalVideoTrackDisabled, setIsLocalVideoTrackDisabled] =
		useState(onlyWithAudio);

	// if camera is on then it is of grey color and if clicked again it gets off but the light on laptop will remain on because we have already accessed the video track and cant disable it beacuse it will create new room it a type of bug by twilio service
	const handleCameraButtonPressed = () => {
		isLocalVideoTrackDisabled ? startVideo() : stopVideo();
		setIsLocalVideoTrackDisabled(!isLocalVideoTrackDisabled);
	};

	// get the track of video of the users and start the video
	const startVideo = () => {
		// start sending back video stream to other users
		room.localParticipant.videoTracks.forEach((localVideoTrackPublication) => {
			localVideoTrackPublication.track.enable();
		});
	};

	// this switch off the video of the user
	const stopVideo = () => {
		// stop sending camera stream to other users
		room.localParticipant.videoTracks.forEach((localVideoTrackPublication) => {
			localVideoTrackPublication.track.disable();
		});
	};

	return (
		<div className={classes.video_button_container}>
			{isLocalVideoTrackDisabled ? (
				<img
					src="/cameraOff.svg"
					className={`${classes.video_button_image} ${classes.clsRed}`}
					onClick={handleCameraButtonPressed}
					alt="cameraOff"
				/>
			) : (
				<img
					src="/camera.svg"
					className={classes.video_button_image}
					onClick={handleCameraButtonPressed}
					alt="cameraOn"
				/>
			)}
		</div>
	);
};

//connecting to store(redux)
const mapStoreStateToProps = (state) => {
	return { ...state };
};

export default connect(mapStoreStateToProps)(CameraButton);
