/** This function is used to check if the room exists or not
 * Context provides information about the current execution environment so our that serverless function will be deployed to. So we'll be able to get that all of the stuff which is really is providing from context like tokens and everything.
 * Event even contains the request parameters passed into your video function.
 * So if you'll use HTTP request and will, for example, pass the user name, which would like to join the room, will be able to get that name from that event and callback, that function used to complete
 */

exports.handler = function (context, event, callback) {
	const client = context.getTwilioClient();

	const roomId = event.roomId;

	const response = new Twilio.Response();

	const headers = {
		"Access-Control-Allow-Origin": "*", // change this to your client-side URL after deployment
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
		"Content-Type": "application/json",
	};

	response.setHeaders(headers);

	client.video
		.rooms(roomId)
		.fetch()
		.then((room) => {
			if (room) {
				response.setBody({
					roomExists: true,
					room,
				});
			} else {
				response.setBody({
					roomExists: false,
				});
			}

			return callback(null, response);
		})
		.catch((err) => {
			response.setBody({
				roomExists: false,
				err,
			});

			return callback(null, response);
		});
};
