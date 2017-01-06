import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/dataService';
import { ProductDivComponent } from '../product-div/product-div.component';


@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css'],
  providers: [DataService]
})

export class StartpageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
