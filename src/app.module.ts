import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuariosModule } from './usuarios/usuarios.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'users',
    retryDelay: 3000,
    autoLoadEntities: true,
  }), TareasModule, usuariosModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
