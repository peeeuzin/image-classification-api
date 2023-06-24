import { Test, TestingModule } from '@nestjs/testing';
import { LyaService } from './lya.service';

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
});
