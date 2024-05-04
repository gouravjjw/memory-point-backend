import { Body, Controller, Get, Param, Post, Delete } from "@nestjs/common";
import User from "./user.entity";
import { UserService } from "./user.service";
import { UserDto } from "src/users/dto/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @Get()
    // async getAllUsers(): Promise<User[]> {
    //     const users = await this.userService.getAllUsers();
    //     return users;
    // }

    // @Get(':id')
    // async getUserById(@Param('id') id: string): Promise<User> {
    //     const user = await this.userService.getUserById(Number(id));
    //     return user;
    // }

    // @Post()
    // async createUser(@Body() UserDto: UserDto){
    //     const user = await this.userService.createUser(UserDto);
    //     return user;
    // }

    // @Delete(':id')
    // async deleteById(@Param('id') id: string): Promise<User> {
    //     const user = await this.userService.deleteById(Number(id));
    //     return user;
    // }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        const user = await this.userService.getUserById(Number(id));
        return user;
    }

   @Post()
    async createUser(@Body() UserDto: UserDto){
        const user = await this.userService.createUser(UserDto);
        if(!user){
            return" Error in creating User";
        }
        else{
            return "User creation/updation successfully";
        }
    }

    
}