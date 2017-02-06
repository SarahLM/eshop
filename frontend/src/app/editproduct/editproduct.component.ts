import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import {productService} from '../_services/productService';
import {dataService} from '../_services/dataService';
import { NgForm } from '@angular/forms';
import {ActivatedRoute } from '@angular/router';
import { ProductDivComponent } from '../product-div/product-div.component';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})

export class editproductComponent implements OnInit {

	public showSuccess: boolean;
  private sub: any;
  public myItem: ProductDivComponent;

 constructor(private http: Http, private route : ActivatedRoute, private _dataService: dataService) {}

  ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
      this.editProduct(params['id']);
      });
  }

  editProduct(id : string) {
            this._dataService
            .updateProducts(id)
            .subscribe((myItem:ProductDivComponent) => this.myItem = myItem[0],
                error => console.log(error),
                () => console.log(this.myItem));
      		};

  updateProduct(form: NgForm) {

    this.http.put( "http://localhost:8080/update" , form.value ).toPromise()
    .then((res: Response) => {
        console.log(res);
        this.showSuccess = res["_body"] == "OK";
          if (this.showSuccess) form.reset();
  });

  }
  
  }


