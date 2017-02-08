import { Component, OnInit , ApplicationRef } from '@angular/core';
import { dataService } from '../_services/dataService';
import { ActivatedRoute } from '@angular/router';
import { ProductDivComponent } from '../product-div/product-div.component';
import { FilterPipe } from '../filter.pipe';
  import { SuchePipe } from '../suche.pipe';


@Component({
  selector: 'app-category',
  providers: [dataService],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})

export class CategoryComponent implements OnInit {

  categoryName: string;
  private sub: any;

  public myItems: ProductDivComponent [];
  public term: any;
  public forceUpdate: number;

  private isDisabled: boolean;
  private isOpen: boolean = false;

  constructor(private route: ActivatedRoute, private _dataService: dataService, private ar: ApplicationRef) {
  }

  ngOnInit() {

  this.term = { "color": {}, "price": {} };
  this.forceUpdate = 0;

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

applyFilter() {

    this.forceUpdate++;

  }

  toggleOpen(event) {
    event.preventDefault();
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }

  onKey(event: any) {
    document.getElementById("search_option").style.display = "block";
}
  weg($event) {
    document.getElementById("search_option").style.display = "none";
  }

}


