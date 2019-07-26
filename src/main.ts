import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

import * as session from 'express-session';
import {AppModule} from './app.module';


async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('OpenAM SP Example')
        .setDescription('OpenAM SP Example')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    app.enableCors();


    app.use(session({
        secret: '123456', // Please change to something appropriate
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 30 * 60 * 1000,
        },
    }));

    app.useGlobalPipes(
        new ValidationPipe({
            disableErrorMessages: false,
            transform: true,
            transformOptions: {
                strategy: 'excludeAll',
            },
        }),
    );

    await app.listen(3000);
}

bootstrap();
