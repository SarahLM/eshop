import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

   id : string;
   private actionUrl : string
   
  constructor(private route : ActivatedRoute,private http: Http ) {

    this.id = route.snapshot.params['id'];
      this.actionUrl="http://projektwebshop.f4.htw-berlin.de:8080";
  //this.actionUrl="http://localhost:8080";

    
   
   }
registrierungSenden(form: NgForm) {
  	let invite = this.id;
  	let email = form.value.emailinput;
  	let password = form.value.passwordinput;
  	this.http.get(this.actionUrl+'/registrierung/' + invite+'/' + email +'/'+ password).toPromise()
	.then((res: Response) => {
    	console.log(res);
	});
   }

  ngOnInit() {
  }

}
