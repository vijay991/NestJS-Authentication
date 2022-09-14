import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/login')
    async login(@Body() loginUserDto:any){
        
        this.authService.validateuser(loginUserDto.email, loginUserDto.password);
        
    }

}
