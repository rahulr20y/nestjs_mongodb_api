import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StudentSchema,Student ,StudentDocument} from './schemas/students.schema';


@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}



    async create(createStudentDto: StudentDocument): Promise<Student> {
        const createdStudent = new this.studentModel(createStudentDto);
        return createdStudent.save();
    }


    async findAllStudents(): Promise<Student[]> {
        return this.studentModel.find().exec();
    }


    getAllDemo(): string {
        return 'ALL notifications!';
      }
}
