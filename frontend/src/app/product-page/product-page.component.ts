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
 
 name :string;
 id : string;
 myItems: ProductDivComponent[];
 next : string;
 myItem: ProductDivComponent[];
 zahl: number;
public recentItem = "None";
public cart = [];
  private sub: any;

  constructor(private http: Http, private route : ActivatedRoute, private _dataService: dataService) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
          this.showProduct(this.id);
      this.zahl = parseInt(this.id)+1;
      this.next = this.zahl.toString();
    this.showProductrelated(this.next);
    var cart = JSON.parse(localStorage.getItem("cartItems"));
    if ( Array.isArray(cart) ) { this.cart = cart };
    });

  }

 showProduct(id : string) {
            this._dataService
            .GetSingle(id)
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));
      		};

showProductrelated(next : string) {
     this._dataService
            .GetSingle(next)
            .subscribe((myItem:ProductDivComponent[]) => this.myItem = myItem,
                error => console.log(error),
                () => console.log(this.myItem));
          };

selectedItem(item){

      alert (item.name + ' produkt hinzugefügt');
      this.recentItem = item.name;
      this.name = item.name;
      this.cart.push(item);
      localStorage.setItem( 'cartItems', JSON.stringify(this.cart) );

  }
}