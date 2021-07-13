// this file handles the participants list.

import React from "react";
import { connect } from "react-redux";
import classes from "../RoomPage.module.css";

const SingleParticipant = ({ identity, lastItem }) => {
	//slicing the name of the user from 36 to end to get user name.
	const getParticipantName = (identity) => {
		return identity.slice(36, identity.length);
	};

	return (
		<>
			<p className={classes.participants_paragraph}>
				{getParticipantName(identity)}
			</p>
			{!lastItem && (
				<span className={classes.participants_separator_line}></span>
			)}
		</>
	);
};

const Participants = ({ participants }) => {
	return (
		<div className={classes.participants_container}>
			{participants.map((participants, index) => {
				return (
					<SingleParticipant
						key={participants.identity}
						identity={participants.identity}
						lastItem={participants.length === index + 1}
					/>
				);
			})}
		</div>
	);
};

//Connecting to store to get state of the application
const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStoreStateToProps)(Participants);
