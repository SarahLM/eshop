import { Component, OnInit } from '@angular/core';
import { dataService } from '../_services/dataService';
import { ProductDivComponent } from '../product-div/product-div.component';
  import { SuchePipe } from '../suche.pipe'; 



@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css'],
  providers: [dataService]
})

export class StartpageComponent implements OnInit {

  constructor(private _dataService: dataService) {}


public myItems: ProductDivComponent [];

    ngOnInit() {
    this.getAllItems();
    
  }

  private getAllItems(): void {
        this._dataService
            .GetAll()
            .subscribe((myItems:ProductDivComponent[]) => this.myItems = myItems,
                error => console.log(error),
                () => console.log(this.myItems));
    }

    onKey(event: any) {
    document.getElementById("search_option").style.display = "block";
}

    weg($event) {
      document.getElementById("search_option").style.display = "none";
    }

 }