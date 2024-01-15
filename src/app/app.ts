import express from "express";
import { router } from "./router/router";

const app = express();

router(app);

export { app };
