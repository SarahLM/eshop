import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Seite zu importieren
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StartpageComponent } from './startpage/startpage.component';

//hier werden die Routes definiert
export const routes: Routes = [
  { path: 'login', component: LoginComponent	},
  { path: 'registration', component: RegistrationComponent	},
  { path: 'startpage', component: StartpageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);