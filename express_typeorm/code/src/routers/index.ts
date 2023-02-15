import * as express from "express"
import { userRouter } from "./userRouter"

export const Router = express.Router();

Router.use('/healthchecker', async (req, res) => {
    res.status(200).json({
        status: 'success',
    })
});

Router.use('/users', userRouter);

// register express routes from defined application routes
// Routes.forEach(route => {
//     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
//         const result = (new (route.controller as any))[route.action](req, res, next)
//         if (result instanceof Promise) {
//             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

//         } else if (result !== null && result !== undefined) {
//             res.json(result);
//         }
//     })
// })
