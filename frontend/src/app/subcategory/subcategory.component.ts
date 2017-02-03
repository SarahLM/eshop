import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { dataService } from '../_services/dataService';
import {ActivatedRoute } from '@angular/router';

import { ProductDivComponent } from '../product-div/product-div.component';

@Component({
  selector: 'app-subcategory',
  providers: [dataService],
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css'],
})

export class SubCategoryComponent implements OnInit {

  subCategoryName: string;
  private sub: any;

  public myItems: ProductDivComponent [];

  constructor(private route : ActivatedRoute, private _dataService: dataService) {}

  ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
      this.subCategoryName = params['name'];
      this.getSubCategoryItems(this.subCategoryName);
      
    });
    
  }

  private getSubCategoryItems(subCategoryName : string): void {
    
        this._dataService
            .ShowProductsSubCategory(subCategoryName)
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));

  }

 }
