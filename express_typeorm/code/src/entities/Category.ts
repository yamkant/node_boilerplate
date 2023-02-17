import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Product } from './Product';

@Entity("categories")
export class Category {

    @PrimaryGeneratedColumn()
    cate_seq: number

    @Column()
    cate_name: string

}
