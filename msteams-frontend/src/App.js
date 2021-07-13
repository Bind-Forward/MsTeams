import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Used react lazy which helps in performance
const IntroductionPage = React.lazy(() =>
	import("./components/IntroductionPage/IntroductionPage")
);
const JoinRoomPage = React.lazy(() =>
	import("./components/JoinRoomPage/JoinRoomPage")
);

const RoomPage = React.lazy(() => import("./components/RoomPage/RoomPage"));

// 3 pages are there and for any other route it returns to the Intro page

function App() {
	return (
		<Router>
			<Suspense
				fallback={
					<div className="loading_overlay_container">
						<img src="/msteams.png" alt="MsTeams" />
					</div>
				}
			>
				<Switch>
					<Route path="/join-room">
						<JoinRoomPage />
					</Route>
					<Route path="/room">
						<RoomPage />
					</Route>
					<Route path="/">
						<IntroductionPage />
					</Route>
					<Route path="*">
						<IntroductionPage />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
