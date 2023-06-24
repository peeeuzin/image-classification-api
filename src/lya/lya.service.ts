import { BadRequestException, Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';
import * as jimp from 'jimp';

const IMAGE_SIZE = 180;

@Injectable()
export class LyaService {
    private model: tf.LayersModel;
    CLASSES_NAMES = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips'];

    constructor() {
        this.loadModel();
    }

    private async loadModel() {
        this.model = await tf.loadLayersModel(`file://lya-model/model.json`);
    }

    private async preprocessImage(buffer: Buffer) {
        const jimpImage = await jimp.read(buffer);

        const imageBuffer = await jimpImage
            .resize(IMAGE_SIZE, IMAGE_SIZE)
            .getBufferAsync(jimp.MIME_JPEG);

        const image = tf.node.decodeImage(imageBuffer);

        return image;
    }

    async predict(file: Express.Multer.File) {
        const { mimetype, buffer } = file;

        if (!mimetype.startsWith('image/')) {
            throw new BadRequestException('File must be an image');
        }

        const imageTensor = await this.preprocessImage(buffer);
        const image = imageTensor.expandDims(0);

        const prediction = this.model.predict(image) as tf.Tensor;
        const score = tf.softmax(prediction as tf.Tensor);

        const probabilities = score.dataSync() as Float32Array;

        const result = Array.from(probabilities)
            .map((probability, index) => ({
                probability: probability * 100,
                className: this.CLASSES_NAMES[index],
            }))
            .sort((a, b) => b.probability - a.probability)
            .slice(0, 3);

        return result;
    }
}
