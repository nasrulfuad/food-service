import express from "express";
import { router } from "./router/router";
import { PrismaClient } from "@prisma/client";

const app = express();

const prisma = new PrismaClient();

router(app, prisma);

export { app };
