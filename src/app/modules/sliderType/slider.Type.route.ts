import { Router } from "express";
import {
  createSliderType,
  getSliderTypes,
  getSliderType,
  updateSliderType,
  deleteSliderType,
  getSliderTypesWithSlider,
} from "./sliderType.controller";

const router = Router();

router.post("/", createSliderType);        // Create
router.get("/", getSliderTypes);          // Read all
router.get("/get-all-type-with-slider", getSliderTypesWithSlider);          // Read all
router.get("/:id", getSliderType);        // Read single
router.put("/:id", updateSliderType);     // Update
router.delete("/:id", deleteSliderType);  // Delete

export const sliderTypeRoutes = router;