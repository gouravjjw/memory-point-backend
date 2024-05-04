import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import User from "./user.entity";
import { UserDto } from "src/users/dto/user.dto";

export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
        if(user) {
            return user;
        }
        throw new NotFoundException('No user found');
    }

    async createUser(UserDto: UserDto) {
        const user = await this.userRepository.findOne({
            where: {
                id: UserDto.id,
            }
        });
        if(!user) {
            const User = await this.userRepository.create(UserDto);
            await this.userRepository.save({
                id: UserDto.id,
                name: UserDto.name,
                email: UserDto.email,
                phonenumber: UserDto.phonenumber,
            });
            return User;
        }
        else{
            let id = UserDto.id;
            return this.userRepository.createQueryBuilder()
            .update()
            .set({
              name: UserDto.name,
              email: UserDto.email
            })
            .where('id = :id', { id })
            .execute()
          }

            // await this.userRepository.save({
            //     id: UserDto.id,
            //     name: UserDto.name,
            //     email: UserDto.email,
            //     phonenumber: UserDto.phonenumber,
            // });
        }
    }

    // async deleteById(id: number) {
    //     const user = await this.userRepository.findOne({
    //         where: {
    //             id: id,
    //         }
    //     });
    //     if(!user) {
    //         return null;
    //     }
    //     await this.userRepository.remove(user);
    //     return user;
    // }