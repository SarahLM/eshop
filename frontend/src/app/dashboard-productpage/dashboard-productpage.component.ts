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
public showSuccess: boolean;
 constructor(private http: Http) {
    
}
putArticle(form: NgForm) {

	this.http.post( 'http://localhost:8080/putArticle', form.value ).toPromise()
		.then((res: Response) => {
	    	console.log(res);
	    	this.showSuccess = res["_body"] == "OK";
      		if (this.showSuccess) form.reset();
	});

};
  ngOnInit() {}

}
