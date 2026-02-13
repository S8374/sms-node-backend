import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";
import { SliderTypeService } from "./sliderType.service";

export const createSliderType = async (req: Request, res: Response) => {
    const type = await SliderTypeService.createSliderType(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Slider Type Created",
        data: type
    });
};

export const getSliderTypes = async (req: Request, res: Response) => {
    const types = await SliderTypeService.getAllSliderTypes();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        data: types,
        message: ""
    });
};
export const getSliderTypesWithSlider = async (req: Request, res: Response) => {
    const types = await SliderTypeService.getAllSliderTypesWithSlider();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        data: types,
        message: ""
    });
};

export const getSliderType = async (req: Request, res: Response) => {
    const type = await SliderTypeService.getSliderTypeById(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        data: type,
        message: ""
    });
};

export const updateSliderType = async (req: Request, res: Response) => {
    const type = await SliderTypeService.updateSliderType(req.params.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Slider Type Updated",
        data: type
    });
};

export const deleteSliderType = async (req: Request, res: Response) => {
    await SliderTypeService.deleteSliderType(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Slider Type Deleted",
        data: undefined
    });
};
