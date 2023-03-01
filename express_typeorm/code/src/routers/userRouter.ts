import * as express from "express"
import { NextFunction, Request, Response } from "express"

import { UserController } from "../controllers/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    userController.all(req, res, next).then(result => res.json(result));
});

userRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    userController.one(req, res, next).then(result => res.json(result));
});
userRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    userController.save(req, res, next).then(result => res.json(result));
});

userRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    userController.remove(req, res, next).then(result => res.json(result));
});
