import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import {productService} from '../_services/productService';
import {dataService} from '../_services/dataService';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard-productpage',
  templateUrl: './dashboard-productpage.component.html',
  styleUrls: ['./dashboard-productpage.component.css']
})
export class DashboardProductpageComponent implements OnInit  {

 private actionUrl: string;

public showSuccess: boolean;
 constructor(private http: Http) {

 	this.actionUrl="http://projektwebshop.f4.htw-berlin.de:8080";
 	//this.actionUrl="http://localhost:8080";

    
}
putArticle(form: NgForm) {

	this.http.post( this.actionUrl+'/putArticle', form.value ).toPromise()
		.then((res: Response) => {
	    	console.log(res);
	    	this.showSuccess = res["_body"] == "OK";
      		if (this.showSuccess) form.reset();
	});

};
  ngOnInit() {}

}
