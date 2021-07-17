import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentSchema,Student,StudentDocument } from './schemas/students.schema';
import { StudentService } from './student.service';


@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}
    @Post()
    create(@Body() data:StudentDocument){
        return this.studentService.create(data);
    }

    @Get()
    findAllStudents(){
        return this.studentService.findAllStudents();
    }
}
