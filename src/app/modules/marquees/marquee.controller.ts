import { Request, Response } from "express";
import { marqueeService } from "./marquee.service";

const createMarquee = async (req: Request, res: Response) => {
  try {
    const result = await marqueeService.createMarquee(req.body);

    res.status(201).json({
      success: true,
      message: "Marquee created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create marquee",
      error,
    });
  }
};

const getAllMarquees = async (_req: Request, res: Response) => {
  try {
    const result = await marqueeService.getAllMarquees();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch marquees",
      error,
    });
  }
};

const getActiveMarquees = async (_req: Request, res: Response) => {
  try {
    const result = await marqueeService.getActiveMarquees();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch active marquees",
      error,
    });
  }
};

const updateMarquee = async (req: Request, res: Response) => {
  try {
    const result = await marqueeService.updateMarquee(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Marquee updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update marquee",
      error,
    });
  }
};

const deleteMarquee = async (req: Request, res: Response) => {
  try {
    await marqueeService.deleteMarquee(req.params.id);

    res.status(200).json({
      success: true,
      message: "Marquee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete marquee",
      error,
    });
  }
};

export const marqueeController = {
  createMarquee,
  getAllMarquees,
  getActiveMarquees,
  updateMarquee,
  deleteMarquee,
};
