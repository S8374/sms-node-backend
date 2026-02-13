import AppError from "../../errorHelpers/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { WalletServices } from "./wallet.service";

const updateWallet = catchAsync(async (req, res) => {
 if (!req.user) {
    throw new AppError(401, "Unauthorized"); // JWT not found
  }

 const userId = (req.user as { userId: string }).userId;

  const wallet = await WalletServices.updateWallet(
    userId,
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Wallet Updated Successfully",
    data: wallet,
  });
});

export const WalletControllers = {
    updateWallet
}
