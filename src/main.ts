import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

import * as session from 'express-session';
import * as passport from 'passport';
import * as sessionFileStore from 'session-file-store';


import {AppModule} from './app.module';


async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('OpenAM SP Example')
        .setDescription('OpenAM SP Example')
        .setVersion('1.0')
        .addTag('nestjs')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    app.enableCors();


    const FileStore = sessionFileStore(session);

    app.use(session({
        store: new FileStore({path: './sessions'}),
        secret: '123456', // Please change to something appropriate
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 30 * 60 * 1000,
        },
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((obj, done) => done(null, obj));

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
