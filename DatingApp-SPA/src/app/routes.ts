import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KatalogComponent } from './members/katalog/katalog.component';
import { MessagesComponent } from './messages/messages.component';
import { KolowrotkiComponent } from './kolowrotki/kolowrotki.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'katalog', component: KatalogComponent},
            { path: 'katalog/:id', component: MemberDetailComponent},
            { path: 'messages', component: MessagesComponent},
            { path: 'kolowrotki', component: KolowrotkiComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},

];
