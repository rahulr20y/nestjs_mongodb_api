import { Controller,Post,Get,Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat,CatSchema,CatDocument } from './schemas/cat.schema';

@Controller('cat')
export class CatController {
    constructor(private readonly catService:CatService){}

    @Post()
    create(@Body() data:CatDocument){
        return this.catService.create(data);
    }

    @Get()
    findAllCats(){
        return this.catService.findAllCats();
    }
}
