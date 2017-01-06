import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import { Configuration } from '../_services/app.constants';

import { ProductDivComponent } from '../product-div/product-div.component';

@Injectable()
export class DataService {
  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http) {
    this.actionUrl = "http://localhost:8081/test";

    //this.headers.append('Content-Type', 'application/json');
    //this.headers.append('Accept', 'application/json');
  }

  public GetAll = (): Observable<ProductDivComponent[]> => {
    return this._http.get(this.actionUrl)
            .map((response: Response) => <ProductDivComponent[]>response.json().items)
            .catch(this.handleError);
  }

  public GetSingle = (id: number): Observable<ProductDivComponent> => {
       return this._http.get(this.actionUrl + id)
           .map((response: Response) => <ProductDivComponent>response.json())
           .catch(this.handleError);
   }

   public Add = (itemName: string): Observable<ProductDivComponent> => {
           let toAdd = JSON.stringify({ ItemName: itemName });

           return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
               .map((response: Response) => <ProductDivComponent>response.json())
               .catch(this.handleError);
       }

       public Update = (id: number, itemToUpdate: ProductDivComponent): Observable<ProductDivComponent> => {
           return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
               .map((response: Response) => <ProductDivComponent>response.json())
               .catch(this.handleError);
       }

       public Delete = (id: number): Observable<Response> => {
           return this._http.delete(this.actionUrl + id)
               .catch(this.handleError);
       }

       private handleError(error: Response) {
           console.error(error);
           return Observable.throw(error.json().error || 'Server error');
       }
}
