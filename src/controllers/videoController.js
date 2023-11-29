let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 Minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 Minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 Minutes ago",
    views: 59,
    id: 3,
  },
]
export const trending = (req, res) => {
  return res.render("home", {
    pageTitle: "Home",
    videos,
  })
}
export const watch = (req, res) => {
  const { id } = req.params
  const video = videos.find((v) => v.id === Number(id))
  return res.render("watch", { pageTitle: video.title, video })
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
