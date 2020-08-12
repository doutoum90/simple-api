import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { EtudiantsService } from './etudiants.service';

@Controller('etudiants')
export class EtudiantsController {
    constructor(private readonly etudiantService: EtudiantsService) { }

    @Get()
    getEtudiants() {
        return this.etudiantService.getEtudiants();
    }

    @Get(':id')
    getOneEtudiants(@Param('id') id) {
        return this.etudiantService.getOneEtudiants(id);
    }

    @Post()
    createEtudiant(@Body() etudiant) {
        return this.etudiantService.createEtudiant(etudiant);
    }

    @Put(':id')
    async mettreAjourEtudiant(@Param('id') id, @Body() etudiant) {
        return this.etudiantService.mettreAjourEtudiant(id, etudiant);
    }

    @Delete(':id')
    supprimerEtudiant(@Param('id') id: string) {
        return this.etudiantService.supprimerEtudiant(id);
    }
}
