import dotenv from "dotenv";
import connectDB from "./DB/connectDB.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Error on express app || index.js || ${error}`);
      throw error;
    });

    app.listen(port, () => {
      console.log(`express app running at port no ${port}`);
    });
  })
  .catch((error) => {
    console.log(`mongodb connection failed || index.js || ${error}`);
  });
