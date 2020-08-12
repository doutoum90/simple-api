import * as mongoose from 'mongoose';

export const etudiantSchema = new mongoose.Schema({
    id: String,
    nom: { type: String, required: true },
    prenom1: String,
    prenom2: String,
    age: Number,
    dateNaissance: Date,
    fraisSubsistance: Number,
    note: Number,
})
export interface Etudiant {
    id?: string;
    nom: String;
    prenom1: String;
    prenom2: String;
    age: number;
    dateNaissance: Date;
    fraisSubsistance: number;
    note: number;
}

export interface EtudiantModel extends Etudiant, mongoose.Document { }