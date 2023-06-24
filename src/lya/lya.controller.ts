import { Controller, Get, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LyaService } from './lya.service';

@Controller('lya')
export class LyaController {
    constructor(private service: LyaService) {}

    @Get('/predict')
    @UseInterceptors(FileInterceptor('image'))
    async predict(@UploadedFile() file: Express.Multer.File) {
        return await this.service.predict(file);
    }

    @Get('/classNames')
    getClassNames() {
        return this.service.CLASSES_NAMES;
    }
}
