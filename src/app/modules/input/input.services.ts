import { IFormField } from "./input.interface";
import { FormFieldModel } from "./input.model";

// Create
const createField = async (payload: IFormField) => {
  return await FormFieldModel.create(payload);
};

// Get by payment method
const getFieldsByPaymentMethod = async (paymentMethodId: string) => {
  return await FormFieldModel.find({
    paymentMethodId,
    isActive: true,
  }).sort({ order: 1 });
};

// Update
const updateField = async (id: string, payload: Partial<IFormField>) => {
  return await FormFieldModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
};

// Delete
const deleteField = async (id: string) => {
  return await FormFieldModel.findByIdAndDelete(id);
};

export const FormFieldService = {
  createField,
  getFieldsByPaymentMethod,
  updateField,
  deleteField,
};