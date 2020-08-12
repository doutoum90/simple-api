import { Controller, Get, Param, Post, Put, Body, Req, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get('connect')
    connexion(@Query() request) {
        return this.userService.connexion(request.username, request.password);
    }

    @Get('getuser')
    getUserByUsername(@Query() request) {
        console.log(request.username);
        return this.userService.getUserByUsername(request.username);
    }

    @Post('inscription')
    createUser(@Body() user) {
        return this.userService.createUser(user);
    }

    @Put('changer/:id')
    async changerMotPasse(@Param('id') id, @Body() user) {
        return this.userService.changerMotPasse(id, user);
    }
}
