//this file handles title of room if user is Host or not

import React from "react";
import classes from "./JoinRoomPage.module.css";

const JoinRoomTitle = ({ isRoomHost }) => {
	const titleText = isRoomHost ? "Host meeting" : "Join meeting";
	return <p className={classes.join_room_title}>{titleText}</p>;
};

export default JoinRoomTitle;
