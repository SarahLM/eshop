import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import {productService} from '../_services/productService';
import {dataService} from '../_services/dataService';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

	public showSuccess: boolean;

 constructor(private http: Http) {
    
    }
    putArticle(form: NgForm) {
	this.http.post( 'http://localhost:8080/putArticle', form.value ).toPromise()
		.then((res: Response) => {
	    	console.log(res);
	    	let mailReceiver = form.value.mail;
	    	this.showSuccess = res["_body"] == "OK";
      		if (this.showSuccess) form.reset();
      		});
	};
 
  ngOnInit() {}
  }


