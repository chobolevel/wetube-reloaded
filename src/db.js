import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/wetube")

const db = mongoose.connection

const handleOpen = () => console.log("Connected to MongoDB")
const handleError = (err) => console.log("DB ERROR: ", err)

db.once("open", handleOpen)
db.on("error", handleError)
