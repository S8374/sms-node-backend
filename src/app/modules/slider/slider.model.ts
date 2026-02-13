import { Schema, model } from "mongoose";
import { ISlider } from "./slider.interface";

const sliderSchema = new Schema<ISlider>(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, trim: true },
    description: { type: String, trim: true },
    image: { type: String, required: true },

    // ✅ Use Schema.Types.ObjectId instead of Types.ObjectId
    sliderTypeId: { type: Schema.Types.ObjectId, ref: "SliderType", required: true },

    buttonText: { type: String, trim: true },
    imageRedirectLink: { type: String, trim: true },
    buttonLink: { type: String, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

export const SliderModel = model<ISlider>("Slider", sliderSchema);
