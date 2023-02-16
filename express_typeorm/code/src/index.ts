import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Router } from "./routers"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    const PORT = process.env.PORT || 3000;
    app.use(bodyParser.json())

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

    app.use(Router);


    // MIDDLEWARE
    // 1. Body parser
    // 2. Logger
    // 3. Cookie Parser
    // 4. Cors

    // start express server
    app.listen(process.env.PORT);

    console.log(`Express server has started on port ${PORT}.`);

}).catch(error => console.log(error))
