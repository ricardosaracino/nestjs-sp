import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {SamlStrategy} from './saml.strategy';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: undefined}),
    ],
    controllers: [AuthController],
    providers: [AuthService, SamlStrategy],
    exports: [PassportModule, AuthService],
})
export class AuthModule {
}
