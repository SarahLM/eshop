import { Component, OnInit } from '@angular/core';
import { dataService } from '../_services/dataService';
import { ActivatedRoute } from '@angular/router';
import { ProductDivComponent } from '../product-div/product-div.component';

@Component({
  selector: 'app-category',
  providers: [dataService],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})

export class CategoryComponent implements OnInit {

  categoryName: string;
  private sub: any;

  private isDisabled: boolean;
  private isOpen: boolean = false;

  public myItems: ProductDivComponent [];

  constructor(private route: ActivatedRoute, private _dataService: dataService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryName = params['name'];
      this.getCategoryItems(this.categoryName);
    });
  }

  private getCategoryItems(categoryName: string): void {
    this._dataService
      .ShowProducts(categoryName)
      .subscribe((myItems: ProductDivComponent[]) => this.myItems = myItems,
        error => console.log(error),
        () => console.log(this.myItems));
  }

  toggleOpen(event) {
    event.preventDefault();
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }

}


