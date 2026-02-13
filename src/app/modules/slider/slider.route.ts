import express from "express";
import {
  createSlider,
  getSliders,
  getSingleSlider,
  updateSlider,
  deleteSlider,
} from "./slider.controller";

const router = express.Router();

// Admin routes
router.post("/", createSlider);
router.put("/:id", updateSlider);
router.delete("/:id", deleteSlider);

// Public routes
router.get("/", getSliders);              // ?type=hero
router.get("/:id", getSingleSlider);

export const SliderRoutes = router