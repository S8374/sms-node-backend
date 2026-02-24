import { IInstruction, IPaymentMethod } from "./deposite.interface";
import { InstructionModel, PaymentMethodModel } from "./deposite.model";

// Create
const createPaymentMethod = async (payload: IPaymentMethod) => {
  return await PaymentMethodModel.create(payload);
};

// Get All (Admin)
const getAllPaymentMethods = async () => {
  return await PaymentMethodModel.find().sort({ order: 1 });
};

// Get Active (Frontend)
const getActivePaymentMethods = async () => {
  return await PaymentMethodModel.find({ isActive: true }).sort({ order: 1 });
};

// Get Single
const getSinglePaymentMethod = async (id: string) => {
  return await PaymentMethodModel.findById(id);
};

// Update
const updatePaymentMethod = async (
  id: string,
  payload: Partial<IPaymentMethod>
) => {
  return await PaymentMethodModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

// Delete
const deletePaymentMethod = async (id: string) => {
  return await PaymentMethodModel.findByIdAndDelete(id);
};
// Create
const createInstruction = async (payload: IInstruction) => {
  return await InstructionModel.create(payload);
};

// Get All
const getAllInstructions = async () => {
  return await InstructionModel.find().sort({ step: 1 });
};

// Get By Type (important for frontend filtering)
const getInstructionsByType = async (type: string) => {
  return await InstructionModel.find({ type, isActive: true }).sort({ step: 1 });
};

// Get Single
const getSingleInstruction = async (id: string) => {
  return await InstructionModel.findById(id);
};

// Update
const updateInstruction = async (
  id: string,
  payload: Partial<IInstruction>
) => {
  return await InstructionModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

// Delete
const deleteInstruction = async (id: string) => {
  return await InstructionModel.findByIdAndDelete(id);
};


export const PaymentMethodService = {
  createPaymentMethod,
  getAllPaymentMethods,
  getActivePaymentMethods,
  getSinglePaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
    createInstruction,
  getAllInstructions,
  getInstructionsByType,
  getSingleInstruction,
  updateInstruction,
  deleteInstruction,
};