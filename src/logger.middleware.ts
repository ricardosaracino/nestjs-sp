import {Injectable, NestMiddleware} from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: () => void) {
        console.log(`Request ${req.baseUrl}`);
        next();
    }
}
