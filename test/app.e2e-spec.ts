import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import fetch from 'node-fetch';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/lya/predict (POST)', async () => {
        const f = await fetch(
            'https://gardenerspath.com/wp-content/uploads/2020/03/Daisy-Taxonomy-Cultivation-and-Growing-Guides-FB.jpg',
        );

        const file: Express.Multer.File = {
            mimetype: 'image/jpeg',
            buffer: await f.buffer(),
            destination: '',
            encoding: '',
            fieldname: '',
            filename: '',
            originalname: '',
            path: '',
            size: 0,
            stream: null,
        };

        return request(app.getHttpServer())
            .get('/lya/predict')
            .attach('image', file.buffer, 'image.jpg')
            .expect(200);
    }, 10000);
});
