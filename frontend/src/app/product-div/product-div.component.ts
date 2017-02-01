import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { dataService } from '../_services/dataService';

@Component({
  selector: 'app-product-div',
  providers: [dataService],
  templateUrl: './product-div.component.html',
  styleUrls: ['./product-div.component.css'],
})

export class ProductDivComponent implements OnInit {

  public myItems: ProductDivComponent [];

  constructor(private _dataService: dataService) { }

  ngOnInit() {
    this.getAllItems();
  }

  private getAllItems(): void {
        this._dataService
            .GetAll()
            .subscribe((data:ProductDivComponent[]) => this.myItems = data,
                error => console.log(error),
                () => console.log(this.myItems));
    }
 }
