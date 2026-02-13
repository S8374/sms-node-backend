import { SliderModel } from "../slider/slider.model";
import { ISliderType } from "./sliderType.interface";
import { SliderTypeModel } from "./sliderType.model";

const createSliderType = async (payload: ISliderType) => {
    return await SliderTypeModel.create(payload);
};

const getAllSliderTypes = async () => {
    return await SliderTypeModel.find({}).sort({ createdAt: -1 });
};
const getAllSliderTypesWithSlider = async () => {
  // Fetch types
  const types = await SliderTypeModel.find();

  // Populate sliders for each type
  const typesWithSliders = await Promise.all(
    types.map(async (type) => {
      const sliders = await SliderModel.find({ sliderTypeId: type._id, isActive: true }).sort({ order: 1 });
      return {
        ...type.toObject(),
        sliders, // add sliders array
      };
    })
  );

  return typesWithSliders;
};
const getSliderTypeById = async (id: string) => {
  const sliderType = await SliderTypeModel.findById(id);
  if (!sliderType) return null;

  // Find sliders belonging to this type
  const sliders = await SliderModel.find({ sliderTypeId: sliderType._id, isActive: true }).sort({ order: 1 });

  return {
    ...sliderType.toObject(),
    sliders, // attach sliders array
  };
};

const updateSliderType = async (id: string, payload: Partial<ISliderType>) => {
    return await SliderTypeModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
};

const deleteSliderType = async (id: string) => {
    return await SliderTypeModel.findByIdAndDelete(id);
};

export const SliderTypeService = {
    createSliderType,
    getAllSliderTypes,
    getSliderTypeById,
    updateSliderType,
    deleteSliderType,
    getAllSliderTypesWithSlider
};
