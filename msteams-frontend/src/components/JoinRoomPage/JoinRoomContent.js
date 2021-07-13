//this files handle content of Join Page if room exits or not

import React, { useState } from "react";
import { connect } from "react-redux";
import JoinRoomInputs from "./JoinRoomInputs";
import {
	setConnectOnlyWithAudio,
	setIdentity,
	setRoomId,
} from "../../store/actions";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";
import RoomNotFoundMessage from "./RoomNotFoundMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { checkIfRoomExists } from "../../utils/twilioUtils";

const JoinRoomContent = (props) => {
	const {
		isRoomHost,
		setConnectOnlyWithAudioAction,
		connectOnlyWithAudio,
		setRoomIdAction,
		setIdentityAction,
		setShowLoadingOverlay,
		userName,
	} = props;

	const [roomIdValue, setRoomIdValue] = useState("");
	const [nameValue, setNameValue] = useState(userName);
	const [showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);

	const history = useHistory();

	//It checks if room exits then we can join. It is async fxn
	const handleJoinToRoom = async () => {
		setIdentityAction(nameValue);

		if (!isRoomHost) {
			setShowLoadingOverlay(true);
			const roomExists = await checkIfRoomExists(roomIdValue);
			setShowLoadingOverlay(false);
			if (roomExists) {
				setRoomIdAction(roomIdValue);
				history.push("/room");
			} else {
				setShowRoomNotFoundMessage(true);
			}
		} else {
			setRoomIdAction(uuidv4());
			history.push("/room");
		}
	};

	return (
		<>
			<JoinRoomInputs
				roomId={roomIdValue}
				setRoomIdValue={setRoomIdValue}
				nameValue={nameValue}
				setNameValue={setNameValue}
				isRoomHost={isRoomHost}
			/>
			<OnlyWithAudioCheckbox
				setConnectOnlyWithAudio={setConnectOnlyWithAudioAction}
				connectOnlyWithAudio={connectOnlyWithAudio}
			/>
			<RoomNotFoundMessage showRoomNotFoundMessage={showRoomNotFoundMessage} />

			<JoinRoomButtons
				isRoomHost={isRoomHost}
				handleJoinToRoom={handleJoinToRoom}
				nameValue={nameValue}
				roomIdValue={roomIdValue}
			/>
		</>
	);
};

//Connecting to store(redux)
const mapDispatchToProps = (dispatch) => {
	return {
		setConnectOnlyWithAudioAction: (onlyWithAudio) =>
			dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
		setIdentityAction: (identity) => dispatch(setIdentity(identity)),
		setRoomIdAction: (id) => dispatch(setRoomId(id)),
	};
};

//Dispatching to store(redux)
const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(
	mapStoreStateToProps,
	mapDispatchToProps
)(JoinRoomContent);
