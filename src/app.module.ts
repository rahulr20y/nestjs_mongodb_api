import { Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose'
import { StudentModule } from './student/student.module';
import { CatModule } from './cat/cat.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/school', {useNewUrlParser: true}),StudentModule,CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
