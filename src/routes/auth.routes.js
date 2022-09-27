const { Router } = require("express");
const {
  registerUser,
  login,
  verificarUsuario,
} = require("../controllers/auth.controller");
const { validarJWT } = require("../middlewares/jwt.middleware");

const router = Router();

router.post("/", registerUser);
router.post("/login", login);
router.get("/", validarJWT, verificarUsuario);

module.exports = router;
