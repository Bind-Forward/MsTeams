// it is also a loader
import React from "react";
import classes from "./RoomPage.module.css";

const Overlay = () => {
	return (
		<div className={classes.overlay_container}>
			<img src="/msteams.png" alt="MsTeams" />
		</div>
	);
};

export default Overlay;
