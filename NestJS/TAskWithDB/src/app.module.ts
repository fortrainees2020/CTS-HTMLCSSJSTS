import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TaskRepository } from './tasks/task.repository';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'testdb',
      autoLoadEntities: true,
      synchronize: true,
      entities: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TasksService,],
})
export class AppModule {}

/**
 * @Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/task-manager'),
    TaskModule,
  ],
})
export class AppModule {}
 */
