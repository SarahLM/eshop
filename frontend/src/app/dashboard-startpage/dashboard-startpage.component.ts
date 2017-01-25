import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';
import { DashboardProductpageComponent } from '../dashboard-productpage/dashboard-productpage.component';


@Component({
 	selector: 'app-dashboard-startpage',
  	templateUrl: './dashboard-startpage.component.html',
  	styleUrls: ['./dashboard-startpage.component.css']
})
export class DashboardStartpageComponent {

  constructor( private http: Http ) {

  }

  sendMail(form: NgForm) {
  	let mailReceiver = form.value.mail;
  	this.http.get('http://projektwebshop.f4.htw-berlin.de:8080/SendMail/' + mailReceiver).toPromise()
	.then((res: Response) => {
    	//this.friendsAsPromise.friends = res.json().friends;
    	console.log(res);
	});

  }

 }
