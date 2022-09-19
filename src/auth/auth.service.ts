import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userserivce:UserService,
        private jwtService: JwtService
        ){}

    async validateUser(email:string, password:string){
        
        const user =await this.userserivce.findbyEmail(email);
        
        if(user && user.password===password){
            return user;
        }
        return null;
    }

    async login(user:any){
        const payload = {email:user.email, sub:user.id}
        return {
            access_token :this.jwtService.sign(payload),
        } 
    }
}
