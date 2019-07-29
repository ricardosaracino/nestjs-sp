import {CanActivate, ExecutionContext, ForbiddenException} from '@nestjs/common';
import {Observable} from 'rxjs';

export class SessionGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        return !!context.switchToHttp().getRequest().user;
    }
}
