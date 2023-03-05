import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
// import { Routes } from "./routes"
import { Router } from "./routers"
import * as morgan from "morgan";

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    const PORT = process.env.PORT || 3000;;



    // MIDDLEWARE
    // 1. Body parser
    // 2. Logger
    app.use(morgan('tiny'));
    // 3. Cookie Parser
    // 4. Cors

    app.use(bodyParser.json())
    app.use('/', Router);

    // start express server
    app.listen(process.env.PORT);

    console.log(`Express server has started on port ${PORT}.`);

}).catch(error => console.log(error))
