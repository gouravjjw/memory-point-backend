import { Transform, Type } from "class-transformer";
import { IsDate } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class User {
    @PrimaryColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    //@Column({unique: true})
    @Column({nullable: true, type:'date'})
    //@Type(() => Date)
    //@IsDate()
    //@Transform(dob => form('YYYY-MM-DD'))
    dob: Date;

    @Column({nullable: true})
    gender: string;

    @Column()
    phonenumber: string;
}

export default User;