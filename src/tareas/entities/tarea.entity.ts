import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('tareas')
export class TareaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

}