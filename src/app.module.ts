import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EtudiantsModule } from './etudiants/etudiants.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    EtudiantsModule,
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://admin:graytchad@cluster0.vszkf.mongodb.net/etudiants?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
})
export class AppModule { }
