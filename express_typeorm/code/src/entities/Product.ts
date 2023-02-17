import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    RelationId,
    JoinColumn,
} from "typeorm"

import { Brand } from './Brand';
import { Category } from './Category';

@Entity("products")
export class Product {

    @PrimaryGeneratedColumn()
    prod_seq: number

    @Column()
    prod_name: string

    @Column()
    buy_link: string

    // @CreateDateColumn({ name: 'created_at' })
    // createdAt!: Date;

    @ManyToOne(type => Brand)
    @JoinColumn( { name: 'brand_seq' } )
    brand_seq: Brand;

    @ManyToOne(() => Category)
    @JoinColumn( { name: 'cate_seq' } )
    cate_seq: Category;
}
