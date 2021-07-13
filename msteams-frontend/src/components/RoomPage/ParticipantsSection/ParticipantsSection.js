// it contains participants label and the name of participants
import React from "react";
import ParticipantsLabel from "./ParticipantsLabel";
import Participants from "./Participants";
import classes from "../RoomPage.module.css";

const ParticipantsSection = () => {
	return (
		<div className={classes.participants_section_container}>
			<ParticipantsLabel />
			<Participants />
		</div>
	);
};

export default ParticipantsSection;
