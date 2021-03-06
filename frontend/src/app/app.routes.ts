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
import {CartPageComponent} from "./cart-page/cart-page.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { ImpressumComponent} from "./impressum/impressum.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { CategoryComponent } from "./category/category.component";
import { SubCategoryComponent } from "./subcategory/subcategory.component";
import { editproductComponent } from "./editproduct/editproduct.component";
import {SalePageComponent} from "./sale-page/sale-page.component";
import {NewPageComponent} from "./new-page/new-page.component";


//hier werden die Routes definiert
export const routes: Routes = [
  { path: '', component: StartpageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'login', component: LoginComponent	},
  { path: 'registration/:id', component: RegistrationComponent	},
  { path: 'category/:name', component: CategoryComponent  },
  { path: 'sale', component: SalePageComponent },
  { path: 'subcategory/:name', component: SubCategoryComponent  },

  { path: 'product-page/:id', component: ProductPageComponent },
  { path: 'mitarbeiter-bereich', component: DashboardStartpageComponent },
  { path: 'mitarbeiter-bereich/add-product', component: DashboardProductpageComponent },
  { path: 'mitarbeiter-bereich/edit-product/:id', component: editproductComponent },
  { path: 'neuheiten', component: NewPageComponent },

  { path: 'registration-infopage', component: RegistrationInfopageComponent},
  { path: 'cart/bestelluebersicht', component: BestelluebersichtComponent},
  { path: 'cart/bestelluebersicht/adresse', component: AdresspageComponent},
  { path: 'cart/bestelluebersicht/adresse/bezahlung', component: PaymentpageComponent},
  { path: 'cart/bestelluebersicht/adresse/bezahlung/danke', component: ThankspageComponent},
  { path: 'contact', component: KontaktComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'aboutus', component: AboutusComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

  //{ path: 'startpage', component: StartpageComponent	},
  //{ path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
