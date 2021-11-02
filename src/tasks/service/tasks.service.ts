import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Task } from '../entities/tasks.entity';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private taskRepo: Repository < Task > ) {}

    findAll() {
        return this.taskRepo.find();
    }

    findONe(id: number) {
        return this.taskRepo.findOne(id);
    }

    filter(decription: string) {
        return this.taskRepo.find({
            description: Like(`%${decription}%`),
        });
    }


    // filter(name: string) {
    //   return this.taskRepo.find({
    //     // select: ["name", "surname"],
    //     where:{
    //       name:Like(`%${name}%`),
    //       surname: "Acosta"
    //     },
    //     order:{
    //       id:"ASC"
    //     }
    //   });
    // }

    create(body: Task) {
        const newTask = this.taskRepo.create(body);
        return this.taskRepo.save(newTask);
    }

    async update(id: number, body: Task) {
        const task = await this.taskRepo.findOne(id);
        this.taskRepo.merge(task, body);
        return this.taskRepo.save(task);
    }

    async delete(id: number) {
        await this.taskRepo.delete(id);
        return true;
    }
}