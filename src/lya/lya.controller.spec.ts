import { Test, TestingModule } from '@nestjs/testing';
import { LyaController } from './lya.controller';
import { LyaService } from './lya.service';
import fetch from 'node-fetch';

describe('LyaController', () => {
    let controller: LyaController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [LyaService],
            controllers: [LyaController],
        }).compile();

        controller = module.get<LyaController>(LyaController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return a prediction', async () => {
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

        const result = await controller.predict(file);

        expect(result).toBeDefined();
    });
});
