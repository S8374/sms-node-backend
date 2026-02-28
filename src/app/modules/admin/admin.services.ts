import AppError from "../../errorHelpers/AppError";
import { IsActive, IUser, Role } from "../user/user.interface";
import { User } from "../user/user.model";

const getAllUsers = async (query: any) => {
  const { search, page = 1, limit = 10 } = query;

  const filter: any = { isDeleted: false };

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  const skip = (Number(page) - 1) * Number(limit);

  const users = await User.find(filter)
    .select("-password")
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await User.countDocuments(filter);

  return {
    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
    },
    data: users,
  };
};

const getSingleUser = async (id: string) => {
  const user = await User.findById(id).select("-password");
  if (!user) throw new AppError(404, "User not found");
  return user;
};


const changeUserStatus = async (id: string, status: IsActive) => {
  const user = await User.findByIdAndUpdate(
    id,
    { isActive: status },
    { new: true }
  );
  console.log("users....",user);
  if (!user) throw new AppError(404, "User not found");

  return user;
};


const changeUserRole = async (id: string, role: Role) => {
  const user = await User.findByIdAndUpdate(
    id,
    { role },
    { new: true }
  );

  if (!user) throw new AppError(404, "User not found");

  return user;
};

const deleteUser = async (id: string) => {
  const user = await User.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  if (!user) throw new AppError(404, "User not found");

  return user;
};
// Add this service method
const updateUser = async (id: string, payload: Partial<IUser>) => {
  const user = await User.findByIdAndUpdate(
    id,
    { 
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      address: payload.address,
      picture: payload.picture,
      referralCode: payload.referralCode,
      isVerified: payload.isVerified
    },
    { new: true, runValidators: true }
  ).select("-password");

  if (!user) throw new AppError(404, "User not found");

  return user;
};
export const UserServices = {
  getAllUsers,
  getSingleUser,
  changeUserStatus,
  changeUserRole,
  deleteUser,
  updateUser
};