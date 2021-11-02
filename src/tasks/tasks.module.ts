import { Module } from '@nestjs/common';
import { TasksService } from './service/tasks.service';
import { TasksController } from './controllers/tasks.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';



@Module({
    imports: [
        TypeOrmModule.forFeature([Task])
    ],
    providers: [TasksService],
    controllers: [TasksController]
})
export class TasksModule {}