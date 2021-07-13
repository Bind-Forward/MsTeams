// it shows the code which a user can copy and send to other user to join the page.

import React from "react";
import classes from "../RoomPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const RoomLabel = ({ roomId }) => {
	//copy fxn
	const copyToClipboard = () => {
		navigator.clipboard.writeText(roomId);
	};

	return (
		<div className={classes.room_label}>
			<p className={classes.room_label_paragraph}>
				ID: {roomId}{" "}
				<span className={classes.crs}>
					<FontAwesomeIcon
						icon={faCopy}
						className={classes.clrg}
						onClick={copyToClipboard}
					/>
				</span>
			</p>
		</div>
	);
};

export default RoomLabel;
