import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent	},
  { path: 'registration', component: RegistrationComponent	}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);