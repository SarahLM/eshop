import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  public showSuccess: boolean;


   private actionUrl : string;
 

  constructor(private http: Http) {
  //this.actionUrl="http://projektwebshop.f4.htw-berlin.de:8080";
  this.actionUrl="http://localhost:8080";
   }

  nachrichtSenden(form: NgForm) {
  	let email = form.value.email;
  	let name = form.value.name;
  	console.log(email);

  	this.http.get(this.actionUrl+'/kontaktformular/' + email +'/'+ name).toPromise()
	.then((res: Response) => {
	console.log(res);
      this.showSuccess = res["status"] == 200;
      if (this.showSuccess) form.reset();
	});
   }

  ngOnInit() {
  }

}
