import { JwtPayload } from "jsonwebtoken";


declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload
        }
    }
}


// const userId = (req.user as { userId: string }).userId;
