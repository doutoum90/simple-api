import { Injectable } from '@nestjs/common';
import { EtudiantModel } from './etudiant.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EtudiantsService {
    constructor(@InjectModel('etudiants') private readonly etudiantModel: Model<EtudiantModel>) { }

    async getEtudiants() {
        const etudiants = await this.etudiantModel.find().exec();
        return etudiants;
    }

    getOneEtudiants(id) {
        return this.etudiantModel.findOne({ _id: id })
    }
    async createEtudiant(etudiant) {
        const etudiantModel = new this.etudiantModel({
            nom: etudiant.nom,
            prenom1: etudiant.prenom1,
            prenom2: etudiant.prenom2,
            age: etudiant.age,
            dateNaissance: etudiant.dateNaissance,
            fraisSubsistance: etudiant.fraisSubsistance,
            note: etudiant.note,
        })

        const etudiantCree = await etudiantModel.save();
        return etudiantCree;
    }

    async mettreAjourEtudiant(id, etudiant) {
        const etudiantmodifie = await this.etudiantModel.findByIdAndUpdate(id, etudiant);
        return etudiantmodifie;
    }


    supprimerEtudiant(id) {
        return this.etudiantModel.delete(id)
    }
}
