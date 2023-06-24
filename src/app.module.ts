import { Module } from '@nestjs/common';
import { LyaModule } from './lya/lya.module';

@Module({
    imports: [LyaModule],
})
export class AppModule {}
