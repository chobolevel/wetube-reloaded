export const trending = (req, res) => {
  return res.send("<h1>Hello1</h1>")
}
export const see = (req, res) => {
  console.log(req.params)
  return res.send("Watch Video")
}
export const edit = (req, res) => {
  console.log(req.params)
  return res.send("Edit Video")
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