import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task-status';

@Entity('Task')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}

/* 
MongoDB automatically generates a unique ObjectID for every document you insert
 into a collection if you don't explicitly specify an _id field.
 
 @Prop() decorator is used to define the schema properties.
 @Schema() decorator marks the class as a Mongoose schema.


@Schema()
export class Task extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  // Add other properties as needed
}

export const TaskSchema = SchemaFactory.createForClass(Task);


*/
