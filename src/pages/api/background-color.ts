export default (req, res) => {
  const backgroundColor = process.env.BG_COLOR || 'blue'

  res.statusCode = 200
  res.json({backgroundColor})
}
