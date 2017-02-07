import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import {productService} from '../_services/productService';
import {dataService} from '../_services/dataService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showSuccess: boolean;

  constructor(private http: Http) {
    this.actionUrl="http://projektwebshop.f4.htw-berlin.de:8080";
    //  this.actionUrl="http://localhost:8080";

 }


  loginSenden(form: NgForm) {

  	let username = form.value.username;
  	let password = form.value.passwordinput;
  	this.http.get(this.actionUrl'/login/' + username+'/'+ password).toPromise()
	.then((res: Response) => {
    	console.log(res);
        this.showSuccess = res["_body"] == "OK";
      if (this.showSuccess) form.reset();
	});
   }
  ngOnInit() {
  }

}
