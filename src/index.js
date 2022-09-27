require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { dbConnection } = require("./database/config");
const app = express();
const PORT = 4000;

dbConnection();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    ok: true,
    msg: "Hola que tal",
    data: [],
  });
});

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/events", require("./routes/events.routes"));
app.use("/api/reservations", require("./routes/reservations.routes"));

app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
