//this is JOIN ROOM page where all the content is managed

import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Particles from "react-particles-js";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import JoinRoomTitle from "./JoinRoomTitle";
import JoinRoomContent from "./JoinRoomContent";
import { setIsRoomHost } from "../../store/actions";
import classes from "./JoinRoomPage.module.css";
import LoadingOverlay from "./LoadingOverlay";

const JoinRoomPage = (props) => {
	const { setIsRoomHostAction, isRoomHost, image } = props;

	const search = useLocation().search;

	//check the url if it has host in it or not
	useEffect(() => {
		const isRoomHost = new URLSearchParams(search).get("host");
		if (isRoomHost) {
			setIsRoomHostAction(true);
		}
	}, []);

	//loading bar is loaded
	const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);

	return (
		<div>
			<div className={classes.navbar}>
				<NavBar />
			</div>

			<div className={classes.join_room_page_container}>
				<div className={classes.join_room_page_panel}>
					<JoinRoomTitle isRoomHost={isRoomHost} />
					<JoinRoomContent setShowLoadingOverlay={setShowLoadingOverlay} />
					{showLoadingOverlay && <LoadingOverlay />}
				</div>
			</div>

			<div className={classes.animation}>
				<Particles
					height={"100vh"}
					params={{
						particles: {
							number: {
								value: 50,
								density: {
									enable: true,
									value_area: 900,
								},
							},
							line_linked: {
								enable: false,
							},
							move: {
								speed: 1,
								out_mode: "out",
							},
							shape: {
								type: ["image", "circle"],
								image: [
									{
										src: "/logo192.png",
										height: 40,
										width: 40,
									},
									{
										src: "/logo512.png",
										height: 40,
										width: 40,
									},
									{
										src: "/Ms.png",
										height: 40,
										width: 80,
									},
									{
										src: image,
										height: 40,
										width: 80,
									},
									{
										src: "/Ms.png",
										height: 40,
										width: 80,
									},
									{
										src: image,
										height: 40,
										width: 40,
									},
								],
							},
							color: {
								value: "#000",
							},
							size: {
								value: 30,
								random: false,
								anim: {
									enable: true,
									speed: 5,
									size_min: 20,
									sync: false,
								},
							},
						},
						retina_detect: false,
					}}
				/>
			</div>
		</div>
	);
};

const mapStoreStateToProps = (state) => {
	return { ...state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
	};
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomPage);
