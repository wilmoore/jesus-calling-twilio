const response = () => {
  const datetime = (new Date().toISOString()).split('T')[0].replaceAll('-', '')
  const filename = `jesuscalling-${datetime}.mp3`
  const endpoint = `https://jesuscalling.nyc3.cdn.digitaloceanspaces.com/${filename}`

  return `<Response><Play>${endpoint}</Play></Response>`
}

module.exports = {
  response,
}
