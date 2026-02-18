import { Document } from "mongoose";

export interface IMarquee extends Document {
  text: string;
  isActive: boolean;
  order: number;
  startDate?: Date;
  endDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
