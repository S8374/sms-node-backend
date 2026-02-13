import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router()



router.post("/register", UserControllers.createUser)

// /api/v1/user/:id
export const UserRoutes = router