import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./admin.services";

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsers(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Users retrieved successfully",
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserServices.getSingleUser(req.params.id);

  sendResponse(res, {
      success: true,
      statusCode: 200,
      data: result,
      message: ""
  });
});

const changeUserStatus = catchAsync(async (req, res) => {
    console.log(req.body.status , req.params)
  const result = await UserServices.changeUserStatus(
    req.params.id,
    req.body.status
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User status updated",
    data: result,
  });
});

const changeUserRole = catchAsync(async (req, res) => {
  const result = await UserServices.changeUserRole(
    req.params.id,
    req.body.role
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User role updated",
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  await UserServices.deleteUser(req.params.id);

  sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User deleted successfully",
      data: undefined
  });
});
// Add this controller method
const updateUser = catchAsync(async (req, res) => {
  const result = await UserServices.updateUser(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User updated successfully",
    data: result,
  });
});

export const AdminControllers = { 
    deleteUser,
    changeUserRole,
    changeUserStatus,
    getSingleUser,
    getAllUsers ,
    updateUser
};
