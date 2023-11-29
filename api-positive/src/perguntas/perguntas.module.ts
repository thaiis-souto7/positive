import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PerguntasController } from './perguntas.controller';
import { PerguntasService } from './perguntas.service';
import { PerguntaSchema } from './interfaces/pergunta.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pergunta', schema: PerguntaSchema }])],
  controllers: [PerguntasController],
  providers: [PerguntasService]
})
export class PerguntasModule {}
