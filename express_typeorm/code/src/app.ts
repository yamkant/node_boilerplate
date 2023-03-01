import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
// import { Routes } from "./routes"
import { Router } from "./routers"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    const PORT = process.env.PORT || 3000;;
    app.use(bodyParser.json())

    app.use('/', Router);


    // MIDDLEWARE
    // 1. Body parser
    // 2. Logger
    // 3. Cookie Parser
    // 4. Cors

    // start express server
    app.listen(process.env.PORT);

    console.log(`Express server has started on port ${PORT}.`);

}).catch(error => console.log(error))
