import Video from "../models/Video"

export const home = async (req, res) => {
  try {
    const videos = await Video.find({})
    return res.render("home", {
      pageTitle: "Home",
      videos,
    })
  } catch (error) {
    return res.render("server-error", { error })
  }
}
export const watch = (req, res) => {
  const { id } = req.params
  return res.render("watch", { pageTitle: "watch" })
}
export const getEdit = (req, res) => {
  const { id } = req.params
  return res.render("edit", { pageTitle: "edit" })
}
export const postEdit = (req, res) => {
  const { id } = req.params
  const { title } = req.body
  return res.redirect(`/videos/${id}`)
}
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" })
}
export const postUpload = (req, res) => {
  const { title } = req.body
  return res.redirect("/")
}
