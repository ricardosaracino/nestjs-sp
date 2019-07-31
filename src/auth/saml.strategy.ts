import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-saml';
import {AuthService} from './auth.service';
import {samlPassportConf} from './passport-saml.conf';

@Injectable()
export class SamlStrategy extends PassportStrategy(Strategy, 'saml') {

    constructor(private readonly authService: AuthService) {
        super(samlPassportConf);

        console.log(samlPassportConf);
    }


    async validate(profile, done: Function) {

        try {

            const user = profile;

            done(null, user);

        } catch (err) {
            done(err, false);
        }
    }
}
