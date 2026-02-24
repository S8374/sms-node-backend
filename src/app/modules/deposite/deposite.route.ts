import { Router } from "express";
import { createInstruction, createPaymentMethod, deleteInstruction, deletePaymentMethod, getActivePaymentMethods, getAllInstructions, getAllPaymentMethods, getInstructionsByType, updateInstruction, updatePaymentMethod } from "./deposite.controller";

const router = Router();

// Admin
router.post("/", createPaymentMethod);
router.get("/all", getAllPaymentMethods);
router.put("/:id", updatePaymentMethod);
router.delete("/:id", deletePaymentMethod);

// Public (Frontend)
router.get("/", getActivePaymentMethods);




router.post("/instruction", createInstruction);
router.get("/instruction/get", getAllInstructions);
router.get("/instruction/type/:type", getInstructionsByType);
router.put("/instruction/:id", updateInstruction);
router.delete("/instruction/:id", deleteInstruction);


export const depositRouter =  router;