import { Test, TestingModule } from '@nestjs/testing';
import { LyaService } from './lya.service';
import fetch from 'node-fetch';

describe('LyaService', () => {
    let service: LyaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [LyaService],
        }).compile();

        service = module.get<LyaService>(LyaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
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

        const result = await service.predict(file);

        expect(result[0].className).toBe('daisy');
        expect(result[0].probability).toBeGreaterThan(90);
    });
});
