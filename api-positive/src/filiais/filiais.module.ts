import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FiliaisController } from './filiais.controller';
import { FiliaisService } from './filiais.service';
import { FilialSchema } from './interfaces/filial.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Filial', schema: FilialSchema }])],
  controllers: [FiliaisController],
  providers: [FiliaisService]
})
export class FiliaisModule {}
