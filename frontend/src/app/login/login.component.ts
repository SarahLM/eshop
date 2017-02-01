import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  loginSenden(form: NgForm) {

  	let username = form.value.username;
  	let password = form.value.passwordinput;
  	this.http.get('http://projektwebshop.f4.htw-berlin.de:8080/login/' + username+'/'+ password).toPromise()
	.then((res: Response) => {
    	console.log(res);
	});
   }
  ngOnInit() {
  }

}
