/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { CreateTaskDTO } from './create-task.dto';
import { TaskStatus } from './task-status';
//import { GetTasksFilterDto } from './get-task-filter-dto';
// https://typeorm.io/repository-api
@Injectable()
export class TasksService { 
    constructor(
    @InjectRepository(Task)
    private  taskRepository : TaskRepository ,
    ){}
    /*//@InjectRepository(TaskRepository)
    //  private taskRepository : TaskRepository<Task> , */

// Get all tasks
async getAllTasks(): Promise<Task[]>{
  const found = await this.taskRepository.find();
  if(!found)
  { throw new NotFoundException("None of task assigned");}
  return found;
  }

//------GetTask BY ID
async getTaskById(id: string): Promise<Task>{
      const found = await this.taskRepository.findOneBy({id: id })
      if(!found)
      { throw new NotFoundException(`The task id ${id} NOT found`);}
      return found;
}

//Create a new Task
  async creatTask(createTaskDto : CreateTaskDTO) : Promise<Task>{
    const { title, description } = createTaskDto;
    console.log(title);
    console.log(description);
   const task= this.taskRepository.create({
    title,
    description,
    status: TaskStatus.OPEN,
   });
   
  await this.taskRepository.save(task);
  return task;
}

//Delete Task
  async deleteTask(id: string) :Promise<void>{
  const result = await this.taskRepository.delete(id);
  console.log(result);
  
  if(result.affected===0)
  {
    throw new NotFoundException(`Task with id "${id}" not found `);
  }
}

async updateTaskStatus(id:string, status: TaskStatus): Promise<Task>
{
  console.log("Id and status :"+ id+ " "+status);
 const task = await this.getTaskById(id);
 task.status= status;
 await this.taskRepository.save(task);
 return task;
}

/*async getTasks(filterDTO: GetTasksFilterDto): Promise<Task[]> {
  return this.taskRepository.getTasks(filterDTO);
}*/

    /*------- Code without DB------------------
    private tasks = [];
    //Define a method to return all tasks
    getAllTasks()
    {return this.tasks; }

    //Create a new Task
   creatTask(title: string, description: string ) : Task{
        const task : Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.tasks.push(task);
        return task;
    }
    creatTaskWithDTO(createTaskDto: CreateTaskDTO ) : Task{
        const { title, description} = createTaskDto; 
        const task : Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.tasks.push(task);
        return task;
}

getTaskById(id : string) : Task{
   //return this.tasks.find((task)=>task.id===id);
   const found= this.tasks.find((task)=>task.id===id);
   if (!found)
   { throw new NotFoundException(`The task id ${id} NOT found`);}
   return found;
}

deleteTask(id : string):void
{
 //this.tasks= this.tasks.filter((task) => task.id!=id);
 const found = this.getTaskById(id);
 this.tasks= this.tasks.filter((task) => task.id!=found.id);
}



updateTask(id:string, status: TaskStatus): Task
{
 const task = this.getTaskById(id);
 task.status= status;
 return task;
}
*/
}