import { Router } from "express";
import { AdminControllers } from "./admin.controller";
const router = Router()

router.get(
  "/",
  AdminControllers.getAllUsers
);

router.get(
  "/:id",
  AdminControllers.getSingleUser
);

router.patch(
  "/:id/status",
  AdminControllers.changeUserStatus
);

router.patch(
  "/:id/role",
  AdminControllers.changeUserRole
);

router.delete(
  "/:id",
  AdminControllers.deleteUser
);
router.patch("/:id", AdminControllers.updateUser); // Add this route
export const AdminRoutes = router;