import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KatalogComponent } from './katalog/katalog.component';
import { MessagesComponent } from './messages/messages.component';
import { KolowrotkiComponent } from './kolowrotki/kolowrotki.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'katalog', component: KatalogComponent},
            { path: 'messages', component: MessagesComponent},
            { path: 'kolowrotki', component: KolowrotkiComponent},
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'},

];
