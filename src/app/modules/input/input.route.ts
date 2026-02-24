// src/modules/otp/otp.routes.ts
import express from "express";
import { createFormField, deleteFormField, getFormFields, updateFormField } from "./input.controller";

const router = express.Router();

router.post("/", createFormField);
router.get("/:paymentMethodId", getFormFields);
router.put("/:id", updateFormField);
router.delete("/:id", deleteFormField);
export const inputRoutes = router;