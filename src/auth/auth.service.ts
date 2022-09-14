import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userserivce:UserService){}

    async validateuser(email:string, password:string){
        
        const user =await this.userserivce.findbyEmail(email);

        if(user && user.password===password){
            return `loggend In as ${user.email}`
        }else{
            return 'User not found!'
        }
    }
}
