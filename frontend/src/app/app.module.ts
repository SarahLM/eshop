import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { routing } from './app.routes';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TeaserbannerComponent } from './teaserbanner/teaserbanner.component';
import { ProductDivComponent } from './product-div/product-div.component';

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
    ProductDivComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
