//Starting Page of the WebSite

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setIsRoomHost, setUserName } from "../../store/actions";
import classes from "./IntroductionPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const IntroductionPage = ({
	setIsRoomHostAction,
	userName,
	setUserNameAction,
	image,
}) => {
	//this useState manages the login state of user
	const [login, setLogin] = useState(false);

	const history = useHistory();

	//if user is not host this fxn runs
	const pushToJoinRoomPage = () => {
		if (!userName) {
			setLogin(true);
		} else {
			history.push("/join-room");
			setUserNameAction(userName);
			setLogin(false);
		}
	};

	//if user is host this fxn runs
	const pushToJoinRoomPageAsHost = () => {
		if (!userName) {
			setLogin(true);
		} else {
			history.push("/join-room?host=true");
			setUserNameAction(userName);
			setLogin(false);
		}
	};

	useEffect(() => {
		setIsRoomHostAction(false);
	}, []);

	return (
		<div className={classes.introductionPage}>
			<NavBar />
			<div className={classes.body}>
				<div className={classes.leftside}>
					<div className={classes.content}>
						<h2>Microsoft Teams</h2>
						<p>Meet, chat, call, and collaborate in just one place.</p>
						{userName && <p className="clrPink1">{userName}</p>}
						<div className={classes.actionbtn}>
							<button
								className={`${classes.btn} ${classes.mrgn}`}
								onClick={pushToJoinRoomPageAsHost}
							>
								<FontAwesomeIcon className={classes.iconblock} icon={faVideo} />
								New Meeting
							</button>

							<button className={classes.btn} onClick={pushToJoinRoomPage}>
								<FontAwesomeIcon
									className={classes.iconblock}
									icon={faSignInAlt}
								/>
								Join Meeting
							</button>
						</div>
					</div>
					{!userName && login && (
						<div className="clrRed">Please Login! (Top right)</div>
					)}
					<div className={classes.helptext}>
						<a
							href="https://support.microsoft.com/en-us/office/microsoft-teams-video-training-4f108e54-240b-4351-8084-b1089f0d21d7"
							target="_blank"
							rel="noreferrer"
						>
							Learn more
						</a>{" "}
						about Microsoft Teams!
					</div>
				</div>
				<div className={classes.rightside}>
					<div className={classes.content}>
						<Carousel slide={false}>
							{userName ? (
								<Carousel.Item>
									<span
										aria-hidden="true"
										className="carousel-control-prev-icon"
										active="true"
									/>
									<img className="w-50" src={image} alt="User slide" />

									<h3>Hello! {userName}.</h3>
									<p>
										Welcome to <strong>Microsoft Teams</strong> have a nice
										meet!
									</p>
								</Carousel.Item>
							) : (
								<Carousel.Item>
									<span
										aria-hidden="true"
										className="carousel-control-prev-icon"
										active="true"
									/>
									<img className="w-50" src="/login.png" alt="SignIn slide" />

									<h3>Hello nice to have you here!</h3>
									<p>
										Please SignIn! There's{" "}
										<strong>Google authentication</strong> for security reasons,
										Thank you!
									</p>
								</Carousel.Item>
							)}
							<Carousel.Item>
								<span
									aria-hidden="true"
									className="carousel-control-prev-icon"
								/>
								<img className="w-50" src="/gm.svg" alt="First slide" />

								<h3>Get a code you can share</h3>
								<p>
									Click <strong>New Meeting</strong> to get a code you can send
									to people you want to meet with
								</p>
							</Carousel.Item>
							<Carousel.Item>
								<img className="w-50" src="/gm1.svg" alt="Second slide" />

								<h3>See everyone together</h3>
								<p>
									Instantly go from group chat to video conference with the
									touch of a button. <strong>Teams of two or 50</strong> can
									meet in one place from anywhere.
								</p>
							</Carousel.Item>
							<Carousel.Item>
								<img className="w-50" src="/gm2.svg" alt="Third slide" />

								<h3>Your meeting is safe</h3>
								<p>
									No one can join a meeting unless invited with a code provided
									by host. You can chat, screen share and meet. Click on{" "}
									<strong>Join Meeting</strong>
								</p>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};

//Connecting to store(redux)
const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

//Dispatching to store(redux)
const mapDispatchToProps = (dispatch) => {
	return {
		setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
		setUserNameAction: (userName) => dispatch(setUserName(userName)),
	};
};

export default connect(
	mapStoreStateToProps,
	mapDispatchToProps
)(IntroductionPage);
