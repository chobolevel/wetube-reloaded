import express from "express"
import morgan from "morgan"

const PORT = 4000

const app = express()
const logger = morgan("dev")

const home = (req, res) => {
  return res.send("hello")
}
const login = (req, res) => {
  return res.send("login")
}

app.use(logger)
app.get("/", home)
app.get("/login", login)

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
