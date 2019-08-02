import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return '<h1>SAML Passport</h1>' +
            '<h2><a href="/auth/login">Login</a></h2>';
    }
}
