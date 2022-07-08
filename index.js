require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
     url: 'https://raw.githubusercontent.com/wilmoore/jesus-calling-twilio/main/voice.xml',
     to: '+17277109318',
     from: '+19804144556'
   })
  .then(call => console.log(call.sid));
