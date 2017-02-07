import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { dataService } from '../_services/dataService';
import {ActivatedRoute } from '@angular/router';

import { ProductDivComponent } from '../product-div/product-div.component';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-subcategory',
  providers: [dataService],
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css'],
})

export class SubCategoryComponent implements OnInit {



  subCategoryName: string;

  private sub: any;
  private isDisabled: boolean;
  private isOpen: boolean = false;
  public myItems: ProductDivComponent [];
  public term: any;
  public forceUpdate: number;



  constructor(private route : ActivatedRoute, private _dataService: dataService, private ar: ApplicationRef) {}

  ngOnInit() {

      this.term = { "color": {}, "price": {} };
      this.forceUpdate = 0;
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

  applyFilter() {

    this.forceUpdate++;

  }

  toggleOpen(event) {
    event.preventDefault();
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }

 }
