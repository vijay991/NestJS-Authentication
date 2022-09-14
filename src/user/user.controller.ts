import { Controller, Get, Param, Post, Patch, Delete, Body, ParseIntPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{

    constructor(private userservice: UserService){}

    @Get()
    getUser(){
        return this.userservice.get();
    }

    @Post()
    store(@Body() createUserDto:CreateUserDto){
        return this.userservice.create(createUserDto);
    }

    @Patch('/:userId')
    update(
        @Body() updateUserDto:UpdateUserDto, @Param('userId', ParseIntPipe) userId:number
        ){
        return this.userservice.update(updateUserDto, userId);
    }

    @Get('/:userId')
    getUserId(@Param('userId', ParseIntPipe) userId:number){
        return this.userservice.getUser(userId);        
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId:number){
        return this.userservice.delete(userId);
    }
}

