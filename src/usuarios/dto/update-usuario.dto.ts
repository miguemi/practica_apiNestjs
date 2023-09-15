import { PartialType } from '@nestjs/mapped-types';
import { CreateTareaDto } from './create-usuario.dto';

export class UpdateTareaDto extends PartialType(CreateTareaDto) {}
