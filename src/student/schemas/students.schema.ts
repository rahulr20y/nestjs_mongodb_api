import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {

  @Prop()
  studentNo:number;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  Age: number;

}

export const StudentSchema = SchemaFactory.createForClass(Student);