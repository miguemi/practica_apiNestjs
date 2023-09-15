import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from './entities/tarea.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([TareaEntity])
  ],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}