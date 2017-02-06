import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './filter.pipe'



@Component({
  selector: 'app-filterproduct',
  templateUrl: './filterproduct.component.html',
  styleUrls: ['./filterproduct.component.css']
  pipes: [ FilterPipe ]
})
export class FilterproductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
