import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Product } from "./entities/Product"
import { Brand } from "./entities/Brand"
import { Category } from "./entities/Category"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [User, Product, Brand, Category],
    migrations: [],
    subscribers: [],
})
