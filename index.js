const { client } = require('./client')

client.calls
  .create({
    twiml:  '<Response><Play>https://jesuscalling.nyc3.cdn.digitaloceanspaces.com/jesuscalling-20220611.mp3</Play></Response>',
    to:     '+17277109318',
    from:   process.env.TWILIO_PHONE_NUMBER,
  })
  .then((call) => console.log(call.sid))
