const { Router } = require("express");
const {
  obtenerEventos,
  obtenerEvento,
  crearEvento,
} = require("../controllers/events.controller");

const router = Router();

router.get("/", obtenerEventos);
router.get("/:id", obtenerEvento);
router.post("/", crearEvento);

module.exports = router;
