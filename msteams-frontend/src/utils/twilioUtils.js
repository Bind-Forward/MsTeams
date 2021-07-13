// this file handles the fxn which we have made in MsTeamsServerlessBackend

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { store } from "../store/store";
import {
	connect,
	LocalAudioTrack,
	LocalDataTrack,
	LocalVideoTrack,
} from "twilio-video";
import { setMessages, setShowOverlay } from "../store/actions";

// resolution of the user video is handled here
const videoConstraints = {
	audio: true,
	video: {
		width: 640,
		height: 480,
	},
};

let dataChannel = null;

// https request is sent with axios to get token service
export const getTokenFromTwilio = async (setAccessToken, identity) => {
	const randomId = uuidv4();

	const response = await axios.get(
		`https://msteamsserverlessbackend-8035-dev.twil.io/token-service?identity=${randomId}${identity}`
	);

	const data = response.data;

	if (data.accessToken) {
		setAccessToken(data.accessToken);
	}
};

// this fxn helps to connectToRoom
export const connectToRoom = async (
	accessToken,
	roomId = "test-room",
	setRoom
) => {
	const onlyWithAudio = store.getState().connectOnlyWithAudio;
	const constraints = videoConstraints;

	navigator.mediaDevices
		.getUserMedia(constraints)
		.then(async (stream) => {
			let tracks;

			const audioTrack = new LocalAudioTrack(stream.getAudioTracks()[0]);

			const dataTrack = new LocalDataTrack();
			dataChannel = dataTrack;

			let videoTrack;

			videoTrack = new LocalVideoTrack(stream.getVideoTracks()[0]);
			tracks = [audioTrack, videoTrack, dataTrack];

			const room = await connect(accessToken, {
				name: roomId,
				tracks,
			});
			console.log("succesfully connected with twilio room");
			console.log(room);
			setRoom(room);
			if (onlyWithAudio) {
				room.localParticipant.videoTracks.forEach(
					(localVideoTrackPublication) => {
						localVideoTrackPublication.track.disable();
					}
				);
			}
			store.dispatch(setShowOverlay(false));
		})
		.catch((err) => {
			console.log(
				"Error occurred when trying to get an access to local devices"
			);
			console.log(err);
		});
};

// this fxn check if room exists or not
export const checkIfRoomExists = async (roomId) => {
	const response = await axios.get(
		`https://msteamsserverlessbackend-8035-dev.twil.io/room-exists?roomId=${roomId}`
	);

	return response.data.roomExists;
};

// data channel utils
export const sendMessageUsingDataChannel = (
	content,
	messageCreatedByMe = false
) => {
	const identity = store.getState().identity;

	const ownMessage = {
		identity,
		content,
		messageCreatedByMe,
	};

	addMessageToMessenger(ownMessage);

	const messageToSent = {
		identity,
		content,
	};

	const stringifiedMessage = JSON.stringify(messageToSent);
	dataChannel.send(stringifiedMessage);
};

// stores the messages of user and display it
export const addMessageToMessenger = (message) => {
	const messages = [...store.getState().messages];
	messages.push(message);
	store.dispatch(setMessages(messages));
};
