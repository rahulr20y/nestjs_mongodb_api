import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema,Student } from './schemas/students.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Student.name, schema:StudentSchema}])],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
