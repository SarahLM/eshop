import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Seite zu importieren
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { DashboardStartpageComponent } from './dashboard-startpage/dashboard-startpage.component';
import { DashboardProductpageComponent} from './dashboard-productpage/dashboard-productpage.component';
import { RegistrationInfopageComponent} from './registration-infopage/registration-infopage.component';
import { BestelluebersichtComponent } from './bestelluebersicht/bestelluebersicht.component';
import { AdresspageComponent } from './adresspage/adresspage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { ThankspageComponent } from './thankspage/thankspage.component';


//hier werden die Routes definiert
export const routes: Routes = [
  { path: '', component: StartpageComponent },
  { path: 'login', component: LoginComponent	},
  { path: 'registration', component: RegistrationComponent	},
  { path: 'product-page', component: ProductPageComponent },
  { path: 'mitarbeiter-bereich', component: DashboardStartpageComponent },
  { path: 'mitarbeiter-bereich/add-product', component: DashboardProductpageComponent },
  { path: 'registration/registration-infopage', component: RegistrationInfopageComponent},
  { path: 'bestelluebersicht', component: BestelluebersichtComponent},
  { path: 'bestelluebersicht/adresse', component: AdresspageComponent},
  { path: 'bestelluebersicht/adresse/bezahlung', component: PaymentpageComponent},
  { path: 'bestelluebersicht/adresse/bezahlung/danke', component: ThankspageComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

  //{ path: 'startpage', component: StartpageComponent	},
  //{ path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
