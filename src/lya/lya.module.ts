import { Module } from '@nestjs/common';
import { LyaService } from './lya.service';
import { LyaController } from './lya.controller';

@Module({
    providers: [LyaService],
    controllers: [LyaController],
})
export class LyaModule {}
