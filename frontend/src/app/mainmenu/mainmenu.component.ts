import { Component,OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import {productService} from '../_services/productService';
import {dataService} from '../_services/dataService';
import { NgForm } from '@angular/forms';

import { DashboardProductpageComponent } from '../dashboard-productpage/dashboard-productpage.component';
import { ProductDivComponent } from '../product-div/product-div.component';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {


  public myItems: ProductDivComponent [];

  constructor(private http: Http, private _dataService: dataService) { }

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
 

 

  searchProducts(form: NgForm) {
    
        this._dataService
            .SearchProducts(form.value.search, form.value.auswahl)
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));
    // 

  }

  
}

