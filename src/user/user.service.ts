import { Injectable, Param, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

   
    create(createUserDto:CreateUserDto) {
        return  this.usersRepository.save(createUserDto);
    }

    get():Promise<User[]>{
        return this.usersRepository.find();
    }

    getUser( userId: number ) {
        return this.usersRepository.findOne({where:{id:userId}});
    }

    update(updateUserDto:UpdateUserDto, userId:number) {
        return this.usersRepository.update(userId, updateUserDto)
    }

    delete(userId: number) {
        return this.usersRepository.delete(userId);
    }

    findbyEmail( email:string ){
        return this.usersRepository.findOne({where:{email}})
    }
}
