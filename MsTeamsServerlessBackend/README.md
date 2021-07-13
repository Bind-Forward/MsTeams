# Serverless Functions

NOTE- For more than 2 user it is Room Type 'Programmable video' which is charged upto $0.004 per participant minute. So you will be limited to use this as I'm using their Free Trial.
If it is 2 user it is Room Type 'Go' which is FREE.

To connect to rooms, we need a token and to get that access token, we can use Tweedie of server less functions.

STEPS-

1. Make Twilio Account
2. Install nodejs
3. Install Twilio CLI - npm install twilio-cli -g
4. Install Twilio Serverless Toolkit - twilio plugins:install @twilio-labs/plugin-serverless
   and run command twilio serverless:init MsTeamsServerlessBackend.
5. Deploying Twilio serverless:deploy. All the functions will get deployed to twilio server.

Now you can use this functions with frontend of the application.
