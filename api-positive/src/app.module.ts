import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { FiliaisModule } from './filiais/filiais.module';
import { PerguntasModule } from './perguntas/perguntas.module';
import { FormulariosModule } from './formularios/formularios.module';
import { LoginModule } from './login/login.module';
import { RespostasModule } from './respostas/respostas.module';

@Module({
  imports: 
    [ MongooseModule.forRoot('mongodb+srv://thaiis_souto:<senhaPrivada>@positive.h5yx5yp.mongodb.net/positive?retryWrites=true&w=majority', 
      { useNewUrlParser: true, useUnifiedTopology: true }), 
      FuncionariosModule, FiliaisModule,  PerguntasModule, FormulariosModule, RespostasModule, LoginModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
