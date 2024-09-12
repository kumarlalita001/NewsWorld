import { Router } from "express";
import { search } from "../controllers/news.controller.js";

const router = Router();

router.route("/search/:name").get(search);

export default router;
