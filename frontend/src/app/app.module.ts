import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { dataService } from './_services/dataService';
import { routing } from './app.routes';

//import { AuthenticationService, UserService } from './_services/index';
//import { AuthGuard } from './_guards/index';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TeaserbannerComponent } from './teaserbanner/teaserbanner.component';
import { ProductDivComponent } from './product-div/product-div.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { DashboardStartpageComponent } from './dashboard-startpage/dashboard-startpage.component';
import { DashboardProductpageComponent} from './dashboard-productpage/dashboard-productpage.component';
import { RegistrationInfopageComponent} from './registration-infopage/registration-infopage.component';
import { BestelluebersichtComponent } from './bestelluebersicht/bestelluebersicht.component';
import { AdresspageComponent } from './adresspage/adresspage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { ThankspageComponent } from './thankspage/thankspage.component';
import { CartPageComponent } from "./cart-page/cart-page.component";
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoryComponent } from "./category/category.component";
import { SubCategoryComponent } from "./subcategory/subcategory.component";
import { editproductComponent } from './editproduct/editproduct.component';
import {SalePageComponent} from "./sale-page/sale-page.component";
import {NewPageComponent} from "./new-page/new-page.component";

import { FilterPipe } from './filter.pipe';
//import { SearchPipe } from './search.pipe';





@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LightboxComponent,
    MainmenuComponent,
    NewPageComponent,
    SalePageComponent,
    StartpageComponent,
    SearchbarComponent,
    TeaserbannerComponent,
    ProductDivComponent,
    ProductPageComponent,
    DashboardStartpageComponent,
    DashboardProductpageComponent,
    RegistrationInfopageComponent,
    ThankspageComponent,
    BestelluebersichtComponent,
    PaymentpageComponent,
    AdresspageComponent,
    ImpressumComponent,
    KontaktComponent,
    AboutusComponent,
    CategoryComponent,
    SubCategoryComponent,
    editproductComponent,
    //Pipe,
    FilterPipe


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
