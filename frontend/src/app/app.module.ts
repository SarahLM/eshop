import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataService } from './_services/dataService';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LightboxComponent,
    MainmenuComponent,
    StartpageComponent,
    SearchbarComponent,
    TeaserbannerComponent,
    ProductDivComponent,
    ProductPageComponent,
    DashboardStartpageComponent,
    DashboardProductpageComponent,
    RegistrationInfopageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
