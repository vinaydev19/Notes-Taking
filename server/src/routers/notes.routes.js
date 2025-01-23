import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllUserNotes,
  updateNote,
} from "../controllers/notes.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();
router.use(verifyJWT);

router.route("/").post(createNote);
router.route("/user/:userId").get(getAllUserNotes);
router.route("/:noteId").patch(updateNote).delete(deleteNote);

export default router;
