// src/modules/otp/otp.routes.ts
import express from "express";
import { createFormField, deleteFormField, getFormFields, getFromInputByType, updateFormField } from "./input.controller";

const router = express.Router();

router.post("/", createFormField);
router.get("/:paymentMethodId", getFormFields);
router.put("/:id", updateFormField);
router.delete("/:id", deleteFormField);
router.get("/tab/:tab", getFromInputByType);
export const inputRoutes = router;