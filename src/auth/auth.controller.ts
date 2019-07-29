import {Controller, Get, Post, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {SamlStrategy} from './saml.strategy';
import {SessionGuard} from './session.guard';
import {User} from './user.decorator';

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly samlStrategy: SamlStrategy) {
    }

    @Get('login')
    @UseGuards(AuthGuard('saml'))
    @ApiOperation({title: 'Initiates the SAML login flow'})
    public login(@Req() req, @Res() res) {
        res.send('<h1>Login Failure!!</h1>');
    }

    @Post('login/callback')
    @UseGuards(AuthGuard('saml'))
    @ApiOperation({title: 'Handles the SAML login'})
    public async loginCallback(@User() user, @Req() req, @Res() res) {

        // add to passport
        req.login(user, (err, req) => {
            if (err) {
                res.send('<h1>Login Failure!!</h1>');
            } else {
                res.send('<h1>Login Success!!</h1>');
            }
        });
    }

    @Get('logout')
    @UseGuards(SessionGuard)
    @ApiOperation({title: 'Initiates the SAML logout flow'})
    public logout(@Req() req, @Res() res) {

        (this.samlStrategy as any).logout(req, (err, request) => {
            if (!err) {
                res.redirect(request);
            }
        });
    }

    @Get('logout/callback')
    //@UseGuards(AuthGuard('saml'))
    @ApiOperation({title: 'Handles the SAML logout'})
    public logoutCallback(@Req() req, @Res() res) {
        req.logout();
        res.send('<h1>Logout Success!!</h1>');
    }

    @Get('user')
    @UseGuards(SessionGuard)
    public user(@User() user) {
        return user;
    }
}
