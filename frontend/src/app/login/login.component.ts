import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import {ROUTER_DIRECTIVES, Router, Location} from '@angular/router';
import {Router} from '@angular/router';
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
  private actionUrl : string;
  public weiter : boolean;

  constructor(private http: Http, private router: Router) {
    this.actionUrl="http://projektwebshop.f4.htw-berlin.de:8080";
    //this.actionUrl="http://localhost:8080";

 }


  loginSenden(form: NgForm) {

  	let username = form.value.username;
  	let password = form.value.passwordinput;
  	this.http.get(this.actionUrl+'/login/'+ username+'/'+ password).toPromise()
	.then((res: Response) => {
    	console.log(res);
      this.showSuccess = res["_body"] == "erfolgreich eingeloggt";
      if (this.showSuccess) { 
        form.reset();
        this.router.navigate(['mitarbeiter-bereich']);
      } else {
        alert('Anmeldung fehlgeschlagen.');
      }
	});
   }
  ngOnInit() {
  }

}
