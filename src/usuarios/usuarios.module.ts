import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from './entities/usuario.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([TareaEntity])
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class usuariosModule {}