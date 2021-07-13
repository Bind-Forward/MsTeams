const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

//Getting from environment variables
const twilioAccountSid = ACCOUNT_SID;
const twilioAuthToken = ACCOUNT_AUTH;
const twilioApiKey = API_KEY;
const twilioApiSecret = API_SECRET;

//Getting token service
app.get("/api/token-service", (req, res) => {
	const AccessToken = require("twilio").jwt.AccessToken;

	const VideoGrant = AccessToken.VideoGrant;

	const videoGrant = new VideoGrant();

	const { identity } = req.query;

	// create an access token which we will sign with Twilio and we will return that to client
	const token = new AccessToken(
		twilioAccountSid,
		twilioApiKey,
		twilioApiSecret,
		{ identity: identity }
	);

	token.addGrant(videoGrant);

	const accessToken = token.toJwt();

	res.send({
		accessToken: accessToken,
	});
});

//Checking if room exists
app.get("/api/room-exists", (req, res) => {
	const { roomId } = req.query;

	const client = require("twilio")(twilioAccountSid, twilioAuthToken);

	client.video
		.rooms(roomId)
		.fetch()
		.then((room) => {
			if (room) {
				res.send({
					roomExists: true,
					room,
				});
			} else {
				res.send({
					roomExists: false,
				});
			}
		})
		.catch((err) => {
			res.send({
				roomExists: false,
				err,
			});
		});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`App Listening at port ${PORT}`);
});
