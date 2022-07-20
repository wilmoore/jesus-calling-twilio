const { client } = require('./client')
const { response } = require('./twiml')

client.calls
  .create({
    twiml:  response(),
    to:     '+17277109318',
    from:   process.env.TWILIO_PHONE_NUMBER,
  })
  .then((call) => console.log(call.sid))
