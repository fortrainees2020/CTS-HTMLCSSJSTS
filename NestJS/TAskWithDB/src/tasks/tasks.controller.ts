import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  //ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  //Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDTO } from './create-task.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateTaskStatusDto } from './update-task-dto';
//import { GetTasksFilterDto } from './get-task-filter-dto';
//import { CreateTaskValidationPipe } from './dto-validator.pipe';
import { StringValidationPipe } from './string-validation.pipe';
import { CreateTaskValidationPipe } from './dto-validator.pipe';

//import { CreateTaskDTO } from './create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Promise<Task[]> {
    console.log('All Task');
    return this.taskService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id', ParseUUIDPipe) id: string): Promise<Task> {
    //getTaskById(@Param('id') id: string): Promise<Task> {
    console.log('ID:' + id);
    return this.taskService.getTaskById(id);
  }

  @Post()
  createrTask(
    @Body(new CreateTaskValidationPipe()) createTaskDto: CreateTaskDTO,
  ): Promise<Task> {
    //createTask(@Body() createTaskDto: CreateTaskDTO): Promise<Task> {
    console.log(createTaskDto.title + '-----' + createTaskDto.description);
    return this.taskService.creatTask(createTaskDto);
  }

  @Delete('/:id') //CUSTOM PIPE
  //deleteTaskById(@Param('id', ParseIntPipe) id: string): Promise<void> {
  //deleteTaskById(@Param('id') id: string): Promise<void> {
  deleteTaskById(
    @Param('id', new StringValidationPipe()) id: string,
  ): Promise<void> {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTask(
    @Param('id') id: string,
    @Body(new ParseEnumPipe('TaskStatus'))
    @Body()
    UpdateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> {
    const { status } = UpdateTaskStatusDto;
    return this.taskService.updateTaskStatus(id, status);
  }
  /*@Get('/query') //query?search=Clean
  getAllTasksQuery(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
    console.log('All Task based on search or/and status');
    return this.taskService.getTasks(filterDto);
  }*/
}
