import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class TareaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    contrasena: string;

    @Column()
    fecha_nac:Date;

}