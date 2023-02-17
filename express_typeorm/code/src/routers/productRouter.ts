import * as express from "express"
import { NextFunction, Request, Response } from "express"

import { ProductController } from "../controllers/ProductController";

export const productRouter = express.Router();

const productController = new ProductController();

productRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    productController.all(req, res, next).then(result => res.json(result));
});

// productRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
//     productController.one(req, res, next).then(result => res.json(result));
// });

productRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    productController.save(req, res, next).then(result => res.json(result));
});

// productRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
//     productController.remove(req, res, next).then(result => res.json(result));
// });
