import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormulariosController } from './formularios.controller';
import { FormulariosService } from './formularios.service';
import { FormularioSchema } from './interfaces/formulario.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Formulario', schema: FormularioSchema }])],
  controllers: [FormulariosController],
  exports: [FormulariosService],
  providers: [FormulariosService]
})
export class FormulariosModule {}
