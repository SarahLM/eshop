import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import {dataService} from '../_services/dataService';
import { ProductDivComponent } from '../product-div/product-div.component';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
 
 id : string;
 myItems: ProductDivComponent[];


  constructor(private http: Http, private route : ActivatedRoute, private _dataService: dataService) {
  	this.id = route.snapshot.params['id'];
   }


  ngOnInit() {
  	this.showProduct(this.id);

  }

 showProduct(id : string) {
            this._dataService
            .GetSingle(id)
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));
      		};
}