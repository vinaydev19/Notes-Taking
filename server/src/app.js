import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "20kb", extended: true }));
app.use(cookieParser());

// import routers here
import userRouter from "./routers/user.routes.js";
import notesRouter from "./routers/notes.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/notes", notesRouter);

export { app };
