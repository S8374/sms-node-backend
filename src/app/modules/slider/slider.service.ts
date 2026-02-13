/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISlider } from "./slider.interface";
import { SliderModel } from "./slider.model";

const createSlider = async (payload: ISlider) => {
    return await SliderModel.create(payload);
};

const getAllSliders = async (sliderTypeId?: string) => {
    const query: any = {};
    if (sliderTypeId) query.sliderTypeId = sliderTypeId;
    return await SliderModel.find(query).sort({ order: 1 });
};

const getSliderById = async (id: string) => {
    return await SliderModel.findById(id);
};

const updateSlider = async (id: string, payload: Partial<ISlider>) => {
    return await SliderModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
};

const deleteSlider = async (id: string) => {
    return await SliderModel.findByIdAndDelete(id);
};

export const SliderService = {
    createSlider,
    getAllSliders,
    getSliderById,
    updateSlider,
    deleteSlider
};
