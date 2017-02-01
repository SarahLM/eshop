import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {productService} from '../_services/productService';

import { NgForm } from '@angular/forms';
import { DashboardProductpageComponent } from '../dashboard-productpage/dashboard-productpage.component';


@Component({
 	selector: 'app-dashboard-startpage',
  	templateUrl: './dashboard-startpage.component.html',
  	styleUrls: ['./dashboard-startpage.component.css']
})
export class DashboardStartpageComponent implements OnInit{

  constructor( private http: Http, private _productService: productService ) {

  }

  sendMail(form: NgForm) {
  	let mailReceiver = form.value.mail;
  	this.http.get('http://projektwebshop.f4.htw-berlin.de:8080/SendMail/' + mailReceiver).toPromise()
	.then((res: Response) => {
    	console.log(res);
	});

  products = [];

ngOnInit(){
  
this._productService.allProducts().subscribe(resproductService => this.products = resproductService);
}

}

// http://stackoverflow.com/questions/36749153/how-to-i-load-json-data-into-angular2-component

  }

 
