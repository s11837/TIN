import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    Pseudonim: string;
    Age: number;
    Plec: string;
    Created: Date;
    LastActive: Date;
    photoUrl: string;
    Miasto: string;
    opis?: string;
    photos?: Photo[];
}
