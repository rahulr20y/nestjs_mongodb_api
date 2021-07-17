import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Cat,CatSchema,CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}


    async create(createCatDto: CatDocument): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }


    async findAllCats(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }


    getAllDemo(): string {
        return 'ALL notifications!';
      }
}
