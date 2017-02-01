import { Component,OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import {productService} from '../_services/productService';
import {dataService} from '../_services/dataService';
import { NgForm } from '@angular/forms';
//import { HTTP_PROVIDERS } from '@angular2/http';

import { DashboardProductpageComponent } from '../dashboard-productpage/dashboard-productpage.component';


@Component({
 	selector: 'app-dashboard-startpage',
  	templateUrl: './dashboard-startpage.component.html',
  	styleUrls: ['./dashboard-startpage.component.css'],
    //providers: [dataService, HTTP_PROVIDERS]
})
export class DashboardStartpageComponent 
//implements OnInit
{

constructor(private http: Http, private _dataService: dataService) {
 
 this._dataService.GetAll()

  }
  
  products = [];

  GetAll() {
    this._dataService.GetAll()
        .subscribe(
            products => this.products = products,
            error =>  console.error('Error: ' + error)
         );
     }


//products = [];

  //constructor( private http: Http, private dataService: dataService ) {


  //}

  sendMail(form: NgForm) {
  	let mailReceiver = form.value.mail;
  	this.http.get('http://projektwebshop.f4.htw-berlin.de:8080/SendMail/' + mailReceiver).toPromise()
	.then((res: Response) => {
    	console.log(res);
	});

  }

};

//ngOnInit(){
  
//};



// http://stackoverflow.com/questions/36749153/how-to-i-load-json-data-into-angular2-component

  

 
