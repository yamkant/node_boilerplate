import * as express from "express"
import { NextFunction, Request, Response } from "express"

import { OauthController } from "../controllers/OauthController";

export const oauthRouter = express.Router();

const oauthController = new OauthController();

oauthRouter.get('/kakao/code', (req: Request, res: Response, next: NextFunction) => {
    oauthController.getKakaoCode(req, res, next).then((result: any) => res.json(result));
});
