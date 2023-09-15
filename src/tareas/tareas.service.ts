import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TareaEntity } from './entities/tarea.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TareasService {

  //esta línea de código se utiliza para inyectar un repositorio de TypeORM para la entidad TareaEntity en la clase, lo que permite que la clase interactúe con la base de datos utilizando este repositorio para realizar operaciones CRUD y otras operaciones relacionadas con TareaEntity
  constructor(
    @InjectRepository(TareaEntity)
    private readonly tareaRepository: Repository<TareaEntity>,
  ) { }

  
  // esta línea de código se encarga de crear una nueva tarea en la base de datos utilizando los datos proporcionados en el CreateTareaDto y el repositorio (tareaRepository) de TypeORM. El DTO asegura que los datos sean válidos antes de la creación, y el método save almacena la nueva tarea en la base de datos y devuelve la tarea creada.
  async create(createTareaDto: CreateTareaDto) {
    const nuevaTarea = this.tareaRepository.create(createTareaDto); // Crea una instancia de Tarea a partir del DTO (Data Transfer Object)
    return await this.tareaRepository.save(nuevaTarea);
  }

  async findAll() {
    return await this.tareaRepository.find();
  }

  async findOne(id: number): Promise<TareaEntity | undefined> {
    return await this.tareaRepository.findOne({ where: { id } });
  }


  async update(id: number, updateTareaDto: UpdateTareaDto): Promise<TareaEntity | undefined> {
    const tareaExistente = await this.tareaRepository.findOne({ where: { id } });
    if (!tareaExistente) {
      return undefined; // Puedes manejar el caso en que la tarea no se encuentra
    }

    // Actualiza los campos de la tarea existente con los datos del DTO (Data Transfer Object)
    tareaExistente.nombre = updateTareaDto.nombre;
    tareaExistente.descripcion = updateTareaDto.descripcion;

    return await this.tareaRepository.save(tareaExistente);
  }

  async remove(id: number): Promise<void> {
    await this.tareaRepository.delete(id);
  }
}