//It is navbar of the application. It has a google login button and a microsoft logo.

import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { setUserName, setImage } from "../../store/actions";
import { useHistory } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = ({ userName, setUserNameAction, setImageAction }) => {
	const history = useHistory();

	//We are using Oauth 3rd party library for google authentication to enter the application
	const responseGoogle = (response) => {
		setUserNameAction(response.profileObj.name);
		setImageAction(response.profileObj.imageUrl);
	};

	//we are getting response if it has error then this fxn will run
	const responseGoogleError = (error) => {
		console.log(error);
	};

	//if we doublw click the button it logs out of the application
	const logout = () => {
		setUserNameAction("");
		history.push("/");
	};

	//Using useHistory to push to origin page
	const introPage = () => {
		history.push("/");
	};

	return (
		<div className={classes.navbar}>
			<div className={classes.logo} onClick={introPage}>
				<img src="/Ms.png" alt="Microsoft" />
			</div>
			{!userName ? (
				<GoogleLogin
					clientId="866561973493-hta8a4vhohctqe5vqgg7do46aoabot6d.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={responseGoogleError}
					cookiePolicy={"single_host_origin"}
					isSignedIn={true}
					className="clrPink"
				/>
			) : (
				<GoogleLogout
					clientId="866561973493-hta8a4vhohctqe5vqgg7do46aoabot6d.apps.googleusercontent.com"
					buttonText="Logout"
					onLogoutSuccess={logout}
					className="clrPink"
				/>
			)}
		</div>
	);
};

const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserNameAction: (userName) => dispatch(setUserName(userName)),
		setImageAction: (image) => dispatch(setImage(image)),
	};
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Nav);
