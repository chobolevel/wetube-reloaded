export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 Minutes ago",
      videos: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 Minutes ago",
      videos: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 Minutes ago",
      videos: 59,
      id: 1,
    },
  ]
  return res.render("home", {
    pageTitle: "Home",
    videos,
  })
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
