// import { Injectable } from '@nestjs/common';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
// import { Cat, CatDocument } from './schemas/cat.schema';
// import { Students,StudentsDocument } from './schemas/students.schema';

// @Injectable()
// export class NotificationService {
//   // constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}
//   constructor(@InjectModel(Students.name) private studentsModel: Model<StudentsDocument>) {}

    
//   // async create(createCatDto: CatDocument): Promise<Cat> {
//   //   const createdCat = new this.catModel(createCatDto);
//   //   return createdCat.save();
//   // }

//   async create(createStudentDto: StudentsDocument): Promise<Students> {
//     const createdStudent = new this.studentsModel(createStudentDto);
//     return createdStudent.save();
//   }


//   async findAll(): Promise<Students[]> {
//     return this.studentsModel.find().exec();
//   }

//     // async findAll(): Promise<Cat[]> {
//     //   return this.catModel.find().exec();
//     // }
//     getAllNotification(): string {
//         return 'ALL notifications!';
//       }
// }
