import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    cate_seq: number

    @Column()
    cate_name: string

}
