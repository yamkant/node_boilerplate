import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Brand {

    @PrimaryGeneratedColumn()
    brand_seq: number

    @Column()
    brand_name: string

}
