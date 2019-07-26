import {createParamDecorator} from '@nestjs/common';

/**
 * https://docs.nestjs.com/custom-decorators
 */
export const User = createParamDecorator((data: string, req) => {
    return data ? req.user && req.user[data] : req.user;
});
