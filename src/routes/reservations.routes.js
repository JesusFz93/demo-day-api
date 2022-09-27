const { Router } = require("express");
const {
  crearReservacion,
  obtenerReservaciones,
  cancelarReservacion,
} = require("../controllers/reservations.controller");

const { validarJWT } = require("../middlewares/jwt.middleware");

const router = Router();

router.post("/", crearReservacion);
router.get("/", validarJWT, obtenerReservaciones);
router.delete("/:id", validarJWT, cancelarReservacion);

module.exports = router;
