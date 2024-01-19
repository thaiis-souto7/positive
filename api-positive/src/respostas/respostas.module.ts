import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RespostasController } from './respostas.controller';
import { RespostaService } from './respostas.service';
import { RespostaSchema } from './interfaces/resposta.schema';
import { FormulariosModule } from 'src/formularios/formularios.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Resposta', schema: RespostaSchema }]),
    FormulariosModule
  ],
  controllers: [RespostasController],
  providers: [RespostaService],
})
export class RespostasModule {}
