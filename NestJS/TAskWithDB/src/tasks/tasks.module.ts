import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    //TypeOrmModule.forFeature([TaskRepository])
  ],
  controllers: [TasksController],
  providers: [TaskRepository, TasksService],
  exports: [TasksService, TypeOrmModule], // Please make sure that the argument "TaskRepository" at index [0] is available in the AppModule context.
})
export class TasksModule {}
