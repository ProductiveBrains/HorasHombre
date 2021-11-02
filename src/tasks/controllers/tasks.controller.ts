import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { TasksService } from '../service/tasks.service';
import { Task } from '../entities/tasks.entity';

@Controller('api/tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id2: number) {

        // console.log(id2);
        // console.log(typeof id2);
        // let prueba= parseInt(id2);
        // console.log(prueba)
        // console.log(typeof(prueba))
        // console.log(typeof(3))
        // if (typeof id2 === 'number') {
        //   console.log('getOne');
        //   return this.taskService.findONe(id2);
        // }
        // else{
        //     console.log('Tipo Invalido');
        //     return "Ingrese solo numeros";
        // }
        return this.taskService.findONe(id2);
    }

    @Get('/filter/:name')
    getFilter(@Param('name') name: string) {
        console.log('Ger Filter');
        return this.taskService.filter(name);
        //  return name;
    }

    //Here we can implement and Interface
    //Change this we need use DTO
    @Post()
    create(@Body() body: any) {
        return this.taskService.create(body);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.taskService.delete(id);
    }

    //Change this we need use DTO
    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        console.log(body);
        return this.taskService.update(id, body);
    }
}