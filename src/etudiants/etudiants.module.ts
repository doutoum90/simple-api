import { Module } from '@nestjs/common';
import { EtudiantsController } from './etudiants.controller';
import { EtudiantsService } from './etudiants.service';
import { MongooseModule } from '@nestjs/mongoose';
import { etudiantSchema } from './etudiant.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'etudiants', schema: etudiantSchema }])],
  controllers: [EtudiantsController],
  providers: [EtudiantsService]
})
export class EtudiantsModule { }
