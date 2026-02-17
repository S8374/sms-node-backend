import bcryptjs from "bcryptjs";
import httpStatus from "http-status-codes";
import { envVars } from "../../config/env";
import AppError from "../../errorHelpers/AppError";
import { IUser, IAuthProvider } from "./user.interface";
import { User } from "./user.model";
import { Wallet } from "../wallet/wallet.model";
import { createUserTokens } from "../../utils/userTokens";

const createUser = async (payload: Partial<IUser>) => {
  const { name, email, password, referralCode, imHuman, ...rest } = payload;

  if (!name || !password) {
    throw new AppError(httpStatus.BAD_REQUEST, "Username and password are required");
  }

  // Normalize email: treat empty string as undefined
  const normalizedEmail = email?.trim() ? email.trim().toLowerCase() : undefined;

  // Check username uniqueness
  const isNameExist = await User.findOne({ name });
  if (isNameExist) throw new AppError(httpStatus.BAD_REQUEST, "Username already exists");

  // Check email only if provided
  if (normalizedEmail) {
    const isEmailExist = await User.findOne({ email: normalizedEmail });
    if (isEmailExist) throw new AppError(httpStatus.BAD_REQUEST, "Email already exists");
  }

  const hashedPassword = await bcryptjs.hash(password, Number(envVars.BCRYPT_SALT_ROUND));

  const authProvider: IAuthProvider = { provider: "credentials", providerId: name };

  const user = await User.create({
    name,
    email: normalizedEmail,          // ← undefined if not provided
    password: hashedPassword,
    referralCode,
    imHuman: !!imHuman,              // make sure it's boolean
    auths: [authProvider],
    ...rest,
  });
  const userTokens = createUserTokens(user);

  await Wallet.create({ user: user._id, balance: 0 });

  return {
      accessToken: userTokens.accessToken,
    refreshToken: userTokens.refreshToken,
    user
  };
};

export const UserServices = { createUser };
