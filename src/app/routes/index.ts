import { Router } from "express"
import { AuthRoutes } from "../modules/auth/auth.route"
import { UserRoutes } from "../modules/user/user.route"
import { SliderRoutes } from "../modules/slider/slider.route"
import { sliderTypeRoutes } from "../modules/sliderType/slider.Type.route"
import { marqueeRoutes } from "../modules/marquees/marquee.route"
import { depositRouter } from "../modules/deposite/deposite.route"
import { inputRoutes } from "../modules/input/input.route"

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
    {
        path: "/marquee",
        route: marqueeRoutes
    },
    
    {
        path: "/payment-methods",
        route: depositRouter
    },
    {
        path: "/input",
        route: inputRoutes
    }
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

