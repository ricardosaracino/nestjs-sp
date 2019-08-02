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
        res.status(401).send('<h1>Login Failure</h1>');
    }

    @Post('login/callback')
    @UseGuards(AuthGuard('saml'))
    @ApiOperation({title: 'Handles the SAML login'})
    public async loginCallback(@User() user, @Req() req, @Res() res) {

        // add to passport
        req.login(user, (err, req) => {
            if (err) {
                res.status(401).send('<h1>Login Failure</h1>');
            } else {
                res.status(200).send('<h1>Login Success</h1>' +
                    '<h2><a href="/auth/logout">Logout</a></h2>' +
                    '<h2><a href="/auth/user" target="_blank">User</a></h2>');
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
    @ApiOperation({title: 'Handles the SAML logout'})
    public logoutCallback(@Req() req, @Res() res) {
        req.logout();
        res.send('<h1>Logout Success</h1>' +
            '<h2><a href="/auth/login">Login</a></h2>' +
            '<h2><a href="/auth/user" target="_blank">User</a></h2>');
    }

    @Get('user')
    @UseGuards(SessionGuard)
    public user(@User() user) {
        return user;
    }
}
