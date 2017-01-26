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
    	console.log(res);
	});

//this.http.get('http://projektwebshop.f4.htw-berlin.de:8080/allArticles').toPromise()
//	.then((res: Response) => {
//    	console.log(res.data);
//	});

// http://stackoverflow.com/questions/36749153/how-to-i-load-json-data-into-angular2-component

  }

 }
