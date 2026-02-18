import { Marquee } from "./marquee.model";
import { IMarquee } from "./marquee.interface";

const createMarquee = async (payload: Partial<IMarquee>) => {
  return await Marquee.create(payload);
};

const getAllMarquees = async () => {
  return await Marquee.find().sort({ order: 1 });
};

const getActiveMarquees = async () => {
  const now = new Date();

  return await Marquee.find({
    isActive: true,
    $or: [
      { startDate: { $exists: false } },
      { startDate: { $lte: now } },
    ],
    $and: [
      {
        $or: [
          { endDate: { $exists: false } },
          { endDate: { $gte: now } },
        ],
      },
    ],
  }).sort({ order: 1 });
};

const updateMarquee = async (id: string, payload: Partial<IMarquee>) => {
  return await Marquee.findByIdAndUpdate(id, payload, {
    new: true,
  });
};

const deleteMarquee = async (id: string) => {
  return await Marquee.findByIdAndDelete(id);
};

export const marqueeService = {
  createMarquee,
  getAllMarquees,
  getActiveMarquees,
  updateMarquee,
  deleteMarquee,
};
