import { Router } from "express";
import {
  login,
  logout,
  register,
  profile,
  verifyToken,
} from "../Controllers/auth.controllers.js";
import { authRequired } from "../middlewares/validatetoken.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);

export default router;
