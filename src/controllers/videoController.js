export const trending = (req, res) => {
  return res.render("home")
}
export const see = (req, res) => {
  return res.render("watch")
}
export const edit = (req, res) => {
  return res.render("edit")
}
export const search = (req, res) => {
  return res.send("Search")
}
export const upload = (req, res) => {
  return res.send("Upload Video")
}
export const deleteVideo = (req, res) => {
  console.log(req.params)
  return res.send("Delete Video")
}
