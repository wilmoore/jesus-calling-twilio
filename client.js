require('dotenv').config()

module.exports = {
  client: require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN),
}
