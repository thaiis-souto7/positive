import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { FiliaisModule } from './filiais/filiais.module';
import { PerguntasModule } from './perguntas/perguntas.module';
import { FormulariosModule } from './formularios/formularios.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: 
    [ MongooseModule.forRoot('mongodb+srv://thaiis_souto:t09031999@positive.h5yx5yp.mongodb.net/positive?retryWrites=true&w=majority', 
      { useNewUrlParser: true, useUnifiedTopology: true }), 
      FuncionariosModule, FiliaisModule,  PerguntasModule, FormulariosModule, LoginModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
