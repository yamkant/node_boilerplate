import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Product } from './Product';

@Entity("brands")
export class Brand {

    @PrimaryGeneratedColumn()
    brand_seq: number

    @Column()
    brand_name: string
}
