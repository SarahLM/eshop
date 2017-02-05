import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { dataService } from '../_services/dataService';
import { ProductDivComponent } from '../product-div/product-div.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent  {

  public myItems: ProductDivComponent [];

  constructor(private _dataService: dataService) { }

  ngOnInit() {
    this.getAllItemsneu();
    console.log(this.myItems);
  }

  private getAllItemsneu(): void {
        this._dataService
            .GetAllneu()
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));
    }


}
