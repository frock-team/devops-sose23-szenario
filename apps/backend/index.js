const express = require("express");
const cors = require("cors");
const env = process.env.PASSWORD;

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Backend ist erreichbar" });
});

app.get("/api/password", (req, res) => {
  res.json({ message: env });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
