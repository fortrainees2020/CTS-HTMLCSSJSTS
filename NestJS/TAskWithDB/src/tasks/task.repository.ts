import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
//import { Logger } from '@nestjs/common';
//import { GetTasksFilterDto } from './get-task-filter-dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {}
/*async getTasks(filterDTO: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDTO;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    return await query.getMany();
  }
}
/*
@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    
    
    async getTasks1(filterDTO: GetTasksFilterDto): Promise<Task[]> {
        const { status, search } = filterDTO;
        const query = this.createQueryBuilder('task');
    
        if (status) {
          query.andWhere('task.status = :status', { status });
        }
    
        if (search) {
          query.andWhere('LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE Lower(:search))', { search: `%${search}%` });
        }
        const tasks= await query.getMany();
        return tasks;
      }}*/
