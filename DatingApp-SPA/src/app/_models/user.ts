import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    pseudonim: string;
    age: number;
    plec: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    miasto: string;
    opis?: string;
    photos?: Photo[];
}
