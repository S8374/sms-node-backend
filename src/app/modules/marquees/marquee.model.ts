import { Schema, model } from "mongoose";
import { IMarquee } from "./marquee.interface";

const marqueeSchema = new Schema<IMarquee>(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Marquee = model<IMarquee>("Marquee", marqueeSchema);
