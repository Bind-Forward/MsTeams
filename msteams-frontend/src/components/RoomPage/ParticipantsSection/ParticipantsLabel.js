//this file handles the participant label of participation section

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import classes from "../RoomPage.module.css";

const ParticipantsLabel = ({ roomId }) => {
	return (
		<>
			<div className={classes.participants_label_container}>
				<p className={classes.participants_label_paragraph}>PARTICIPANTS</p>
			</div>
			<div className={classes.participants_label_container_add}>
				<a
					href={
						"mailto:?Subject=Microsoft%20Team's%20meeting%20Code&body=You%20have%20been%20invited%20to%20join%20meeting%20with%20CODE%20" +
						roomId
					}
					className={classes.participants_add_people}
				>
					<p className={classes.participants_label_paragraph}>
						<FontAwesomeIcon icon={faUserPlus} /> Add people
					</p>
				</a>
			</div>
		</>
	);
};

//connecting to the store
const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStoreStateToProps, null)(ParticipantsLabel);
