import { Injectable, Param, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UserService {

    constructor(
       
    ){}

   
    get(){
        return {name:"vijay Makwana", email:"abc@gmail.com"}
    }

    create(createUserDto:CreateUserDto) {
        return createUserDto;
    }

    update(updateUserDto:UpdateUserDto, userId:number) {
        return {body:updateUserDto,userId}
    }

    delete(userId: number) {
        return `user deleted of id : ${userId}`;
    }
    
    getUser( userId: number ) {
        return {userId};
    }
}
