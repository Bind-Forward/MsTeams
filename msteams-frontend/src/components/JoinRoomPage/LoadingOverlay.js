//LoadingOverlay used for async fxns to get back response and then display content

import React from "react";
import classes from "./JoinRoomPage.module.css";

const LoadingOverlay = () => {
	return (
		<div className={classes.loading_overlay_container}>
			{/* <div className={classes.loading_overlay_loader}></div> */}
			<img src="/Ms.png" alt="MsTeams" />
		</div>
	);
};

export default LoadingOverlay;
