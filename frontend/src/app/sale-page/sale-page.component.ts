import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { dataService } from '../_services/dataService';
import { ProductDivComponent } from '../product-div/product-div.component';


@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.css']
})
export class SalePageComponent implements OnInit {

  public myItems: ProductDivComponent [];

  constructor(private _dataService: dataService) { }

  ngOnInit() {
    this.getAllItemssale();
    console.log(this.myItems);
  }

  private getAllItemssale(): void {
        this._dataService
            .GetAllsale()
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));
    }
}
