import { Types } from "mongoose";

export interface IFormField {
  _id?: Types.ObjectId;
  label: string;                 // "Sender Account Number"
  name: string;                  // "senderNumber"
  type: "text" | "number" | "textarea";
  placeholder?: string;
  required: boolean;
  order: number;
  paymentMethodId?: Types.ObjectId;  // link to payment method
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}