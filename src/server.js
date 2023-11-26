import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const handleHome = (req, res) => {
  return res.end();
};

app.use(logger);
app.get("/", handleHome);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
