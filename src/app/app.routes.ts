import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: HomeComponent}

];
export const APP_ROUTING = RouterModule.forRoot (APP_ROUTES);
