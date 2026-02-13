import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";
import { SliderService } from "./slider.service";

export const createSlider = async (req: Request, res: Response) => {
    const slider = await SliderService.createSlider(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Slider Created Successfully",
        data: slider,
    });
};

export const getSliders = async (req: Request, res: Response) => {
    const { sliderTypeId } = req.query;
    const sliders = await SliderService.getAllSliders(sliderTypeId as string);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      data: sliders,
      message: ""
    });
};

export const getSingleSlider = async (req: Request, res: Response) => {
    const slider = await SliderService.getSliderById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      data: slider,
      message: ""
    });
};

export const updateSlider = async (req: Request, res: Response) => {
    const slider = await SliderService.updateSlider(req.params.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Slider Updated Successfully",
        data: slider,
    });
};

export const deleteSlider = async (req: Request, res: Response) => {
    await SliderService.deleteSlider(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Slider Deleted Successfully",
      data: undefined
    });
};
