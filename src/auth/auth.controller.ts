import {Controller, Get, Post, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {SamlStrategy} from 'passport-saml';
import {User} from './user.decorator';

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {

    @Get('login')
    @UseGuards(AuthGuard('saml'))
    @ApiOperation({title: 'Initiates the SAML login flow'})
    public login(@Req() req, @Res() res) {
        res.send('<h1>Login Failure!!</h1>');
    }

    @Post('login/callback')
    @UseGuards(AuthGuard('saml'))
    @ApiOperation({title: 'Handles the SAML login'})
    public loginCallback(@User() user, @Req() req, @Res() res) {
        res.send('<h1>Login Success!!</h1>');
    }

    @Get('logout')
    //UseGuards(AuthGuard('saml'))
    @ApiOperation({title: 'Initiates the SAML logout flow'})
    public logout(@Req() req, @Res() res) {
        SamlStrategy.logout(req, function (err, request) {
            console.log(err);
            console.log(request);
            if (!err) {
                res.send('<h1>Logout Failure!!</h1>');
            }
        });
    }

    @Get('logout/callback')
    //@UseGuards(AuthGuard('saml'))
    @ApiOperation({title: 'Handles the SAML logout'})
    public logoutCallback(@Req() req, @Res() res) {
        req.logout();
        res.send('<h1>Logout Success!!</h1>')
    }

}
