import { Router } from "express"
import { AuthRoutes } from "../modules/auth/auth.route"
import { UserRoutes } from "../modules/user/user.route"
import { SliderRoutes } from "../modules/slider/slider.route"
import { sliderTypeRoutes } from "../modules/sliderType/slider.Type.route"

export const router = Router()

const moduleRoutes = [
    {
        path: "/user",
        route: UserRoutes
    },
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/slider",
        route: SliderRoutes
    },
    {
        path: "/slider-type",
        route: sliderTypeRoutes
    },
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

