import { Component,OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import {productService} from '../_services/productService';
import {dataService} from '../_services/dataService';
import { NgForm } from '@angular/forms';
//import { HTTP_PROVIDERS } from '@angular2/http';

import { DashboardProductpageComponent } from '../dashboard-productpage/dashboard-productpage.component';
import { ProductDivComponent } from '../product-div/product-div.component';
  import { SuchePipe } from '../suche.pipe'; 

@Component({
 	selector: 'app-dashboard-startpage',
  	templateUrl: './dashboard-startpage.component.html',
  	styleUrls: ['./dashboard-startpage.component.css'],
    //providers: [dataService, HTTP_PROVIDERS]
})
export class DashboardStartpageComponent implements OnInit {

  public myItems: ProductDivComponent [];
  public showSuccess: boolean;
  private actionUrl : String;

  constructor(private http: Http, private _dataService: dataService) {
  
  this.actionUrl="http://projektwebshop.f4.htw-berlin.de:8080";
  //this.actionUrl="http://localhost:8080";

   }

  ngOnInit() {
    this.getAllItems();
    console.log(this.myItems);
  }

  private getAllItems(): void {
        this._dataService
            .GetAll()
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));
    }
 

  sendMail(form: NgForm) {
  	let mailReceiver = form.value.mail;
  	this.http.get(this.actionUrl+'/SendMail/' + mailReceiver).toPromise()
	.then((res: Response) => {
    	this.showSuccess = res["_body"] == "OK";
      if (this.showSuccess) form.reset();
	});

};

  searchProducts(form: NgForm) {
    
        this._dataService
            .SearchProducts(form.value.search, form.value.auswahl)
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));
    // 

  }

  deleteArticle(item) {
    let id = item.id;
    this.http.delete(this.actionUrl+'/deleteArticle/' + id).subscribe((res) => {
      console.log(res);
    });
}

  modifyProduct(item: ProductDivComponent) {

    // Schritt 1: das übergebene item in eine Form zum bearbeiten laden
    // Vorgehensweise in Angular 1 ähnlich der untenstehenden

    // Schritt 2: In dieser Form alle Elemente anzeigen und bearbeiten lassen (außer ID)
    // Anschließend den ganzen Datensatz an eine Methode übergeben, siehe Beispiel searchProducts oben.

    // Schritt 3: In dieser Methode den Aufruf Update in dataService.ts ausführen
    // ID des Datensatz und kompletten Datensatz übergeben

    // Schritt 4: Im Backend die URL http://localhost:8080/{id} per PUT integrieren
    // Datensatz mit der übergebenen ID aufrufen und mit aktuellen Daten überschreiben

    //this.item = item;
console.log(item);
    


};
}
//ngOnInit(){
  
//};




  

 
