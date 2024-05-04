// import {
//     Column,
//     Entity,
//     PrimaryGeneratedColumn,
// } from 'typeorm';

import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class User {
    @PrimaryColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    //@Column({unique: true})
    @Column({nullable: true})
    email: string;

    @Column()
    phonenumber: string;
}

export default User;