import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  refreshAccessToken,
  updateAccountDetails,
  userLogin,
  userlogout,
  userRegister,
} from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(userRegister);
router.route("/login").post(userLogin);
router.route("/logout").post(verifyJWT, userlogout);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/chnage-password").post(verifyJWT, changeCurrentPassword);
router.route("/currect-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").post(verifyJWT, updateAccountDetails);

export default router;
