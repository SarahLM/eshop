/**
 * Created by Silvia_clf on 20/01/17.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent  {

public cart = JSON.parse(localStorage.getItem("cartItems"));

  constructor() { }


}
