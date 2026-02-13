import bcryptjs from "bcryptjs";
import httpStatus from "http-status-codes";
import { envVars } from "../../config/env";
import AppError from "../../errorHelpers/AppError";
import { IUser, IAuthProvider } from "./user.interface";
import { User } from "./user.model";
import { Wallet } from "../wallet/wallet.model";

const createUser = async (payload: Partial<IUser>) => {
  const { name, email, password, referralCode, ...rest } = payload;

  if (!name || !password) {
    throw new AppError(httpStatus.BAD_REQUEST, "Username and password are required");
  }

  // Check username uniqueness
  const isNameExist = await User.findOne({ name });
  if (isNameExist) throw new AppError(httpStatus.BAD_REQUEST, "Username already exists");

  // Check email only if provided
  if (email) {
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) throw new AppError(httpStatus.BAD_REQUEST, "Email already exists");
  }

  const hashedPassword = await bcryptjs.hash(password, Number(envVars.BCRYPT_SALT_ROUND));

  const authProvider: IAuthProvider = { provider: "credentials", providerId: name };

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    referralCode,
    auths: [authProvider],
    ...rest,
  });

  // ✅ CREATE WALLET AUTOMATICALLY
  await Wallet.create({
    user: user._id, // <-- Correct variable name
    balance: 0,
  });

  return user;
};

export const UserServices = { createUser };
