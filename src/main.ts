import { app } from "./app/app";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
