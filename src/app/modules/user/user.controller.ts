/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */


import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.service";
import { setAuthCookie } from "../../utils/setCookie";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        console.log("User hits  ",req.body);

    const user = await UserServices.createUser(req.body);
     // ✅ Set cookies
      setAuthCookie(res, {
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
      });
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User Created Successfully",
        data: user,
    })
})


export const UserControllers = {
    createUser
}

