import { Router } from "express";
import { createInstruction, createPaymentMethod, deleteInstruction, deletePaymentMethod, getActivePaymentMethods, getAllInstructions, getAllPaymentMethods, getInstructionsByType, getPaymentMethodByTab, updateInstruction, updatePaymentMethod } from "./deposite.controller";

const router = Router();

// Admin
router.post("/", createPaymentMethod);
router.get("/all", getAllPaymentMethods);
router.put("/:id", updatePaymentMethod);
router.delete("/:id", deletePaymentMethod);
router.get("/tab/:tab", getPaymentMethodByTab);

// Public (Frontend)
router.get("/", getActivePaymentMethods);




router.post("/instruction", createInstruction);
router.get("/instruction/get", getAllInstructions);
router.get("/instruction/tab/:tab", getInstructionsByType);
router.put("/instruction/:id", updateInstruction);
router.delete("/instruction/:id", deleteInstruction);


export const depositRouter =  router;