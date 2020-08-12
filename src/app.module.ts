import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantsModule } from './etudiants/etudiants.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EtudiantsModule, MongooseModule.forRoot('mongodb+srv://admin:graytchad@cluster0.vszkf.mongodb.net/etudiants?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
