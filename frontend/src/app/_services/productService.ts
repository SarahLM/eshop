import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class productService{

constructor( private http: Http ) {

  }

allProducts(){
this.http.get('http://projektwebshop.f4.htw-berlin.de:8080/allArticles').map(Response:Response)=>(Response : Response.json()){
  
allproducts = data;
}}