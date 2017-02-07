import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import { Configuration } from '../_services/app.constants';

import { ProductDivComponent } from '../product-div/product-div.component';
import {CartPageComponent} from "../cart-page/cart-page.component";

@Injectable()
export class dataService {
  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http) {
    //this.actionUrl = "http://localhost:8080";
    this.actionUrl="http://projektwebshop.f4.htw-berlin.de:8080";


    //this.headers.append('Content-Type', 'application/json');
    //this.headers.append('Accept', 'application/json');
  }

  public GetAll = (): Observable<ProductDivComponent[]> => {
    return this._http.get(this.actionUrl+"/allArticles")
            //.map((response: Response) => <ProductDivComponent[]>response.json().items)
            .map((response: Response) => <ProductDivComponent[]>response.json().data)

            .catch(this.handleError);
  }

  public GetAlltop = (): Observable<ProductDivComponent[]> => {
    return this._http.get(this.actionUrl+"/getTopProducts")
            //.map((response: Response) => <ProductDivComponent[]>response.json().items)
            .map((response: Response) => <ProductDivComponent[]>response.json().data)

            .catch(this.handleError);
  }

  public GetAllneu = (): Observable<ProductDivComponent[]> => {
    return this._http.get(this.actionUrl+"/getNeuheiten")
            //.map((response: Response) => <ProductDivComponent[]>response.json().items)
            .map((response: Response) => <ProductDivComponent[]>response.json().data)

            .catch(this.handleError);
  }

  public GetAllsale = (): Observable<ProductDivComponent[]> => {
    return this._http.get(this.actionUrl+"/getSale")
            //.map((response: Response) => <ProductDivComponent[]>response.json().items)
            .map((response: Response) => <ProductDivComponent[]>response.json().data)

            .catch(this.handleError);
  }

  public SearchProducts = (search: string, auswahl: string): Observable<ProductDivComponent[]> => {
    console.log(search + " aus dataService.")
    return this._http.get(this.actionUrl+"/searchArticle/"+auswahl+"/"+search)
            .map((response: Response) => <ProductDivComponent[]>response.json().data)

            .catch(this.handleError);
  }

  public ShowProducts = (auswahl: string): Observable<ProductDivComponent[]> => {
    return this._http.get(this.actionUrl+"/category/"+auswahl)
            .map((response: Response) => <ProductDivComponent[]>response.json().data)

            .catch(this.handleError);
  }

  public ShowProductsSubCategory = (auswahl: string): Observable<ProductDivComponent[]> => {
    return this._http.get(this.actionUrl+"/subcategory/"+auswahl)
            .map((response: Response) => <ProductDivComponent[]>response.json().data)

            .catch(this.handleError);
  }



  public updateProducts = (id: string): Observable<ProductDivComponent> => {
    console.log(id + " aus dataService.")
    return this._http.get(this.actionUrl+"/getSingleArticle/"+ id)
            .map((response: Response) => <ProductDivComponent>response.json().data)

            .catch(this.handleError);
  }

 /* public GetAllDash = (): Observable<DashboardStartpageComponent[]> => {
    return this._http.get(this.actionUrl+"/allArticles")
            //.map((response: Response) => <ProductDivComponent[]>response.json().items)
            .map((response: Response) => <DashboardStartpageComponent[]>response.json().data)

            .catch(this.handleError);
  }*/

  public GetSingle = (id: String): Observable<ProductDivComponent[]> => {
       return this._http.get(this.actionUrl+"/getSingleArticle/" + id)
           .map((response: Response) => <ProductDivComponent[]>response.json().data)
           .catch(this.handleError);
   }

   public Add = (itemName: string): Observable<ProductDivComponent> => {
           let toAdd = JSON.stringify({ ItemName: itemName });

           return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
               .map((response: Response) => <ProductDivComponent>response.json())
               .catch(this.handleError);
       }

       public Update = (itemToUpdate: ProductDivComponent): Observable<ProductDivComponent> => {
           return this._http.put(this.actionUrl + "/update", JSON.stringify(itemToUpdate), { headers: this.headers })
               .map((response: Response) => <ProductDivComponent>response.json())
               .catch(this.handleError);
       }

       public Delete = (id: number): Observable<Response> => {
           return this._http.delete(this.actionUrl+"/deleteArticle/"+id)
               .catch(this.handleError);
       }

       private handleError(error: Response) {
           console.error(error);
           return Observable.throw(error.json().error || 'Server error');
       }
}
