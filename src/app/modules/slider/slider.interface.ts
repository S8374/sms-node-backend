import { Types } from "mongoose";

export interface ISlider {
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
    sliderTypeId: Types.ObjectId; // Reference to SliderType
    buttonText?: string;
    buttonLink?: string;
    imageRedirectLink:string;
    order: number;
    createdAt?: Date;
    updatedAt?: Date;
}
