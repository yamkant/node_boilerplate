import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Product } from "../entities/Product"
import { Brand } from "../entities/Brand"
import { Category } from "../entities/Category"

export class ProductController {

    private prodRepository = AppDataSource.getRepository(Product)
    private brandRepository = AppDataSource.getRepository(Brand)
    private cateRepository = AppDataSource.getRepository(Category)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.prodRepository.find();
    }

    // async one(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)
        

    //     const user = await this.prodRepository.findOne({
    //         where: { id }
    //     })

    //     if (!user) {
    //         return "unregistered user"
    //     }
    //     return user;
    // }

    async save(request: Request, response: Response, next: NextFunction) {
        const {
            prod_name: prodName,
            brand_name: brandName,
            cate_name: cateName,
            buy_link: buyLink
        } = request.body;

        let brand: Brand;
        let cate: Category;
        try {
            brand = await this.brandRepository.findOne({
                where: { brand_name: brandName}
            });
            cate = await this.cateRepository.findOne({
                where: { cate_name: cateName}
            });
        } catch (err) {
            console.log(err);

        }
        console.log(brand, cate);

        const prod = this.prodRepository.create({
            prod_name: prodName,
            brand_seq: brand,
            cate_seq: cate,
            buy_link: buyLink,
        });

        return this.prodRepository.save(prod);
    }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)

    //     let userToRemove = await this.prodRepository.findOneBy({ id })

    //     if (!userToRemove) {
    //         return "this user not exist"
    //     }

    //     await this.prodRepository.remove(userToRemove)

    //     return "user has been removed";
    // }

}