import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ordermodel } from '../pages/create-order/ordermodel';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit{


  orders = [
              {id: 1, product: "MICROSOFT", orderSide: "BUY", orderType: "MARKET"},
              {id: 2, product: "GOOGLE", orderSide: "BUY", orderType: "MARKET"},
              {id: 3, product: "NETFLIX", orderSide: "SELL", orderType: "LIMIT"}
  ]

  constructor(private http: HttpClient) { }

  // getAllOrders(){
  //   const url = "http://color.serialif.com/aquamarine"
  //   // return this.http.get<any>(url);
  //   return of(this.orders);
  // }

  newOrder: Ordermodel[];
  getNewOrder(newOrder: Ordermodel){
    //  return console.log("success")
    const url = 'http://localhost/4200';
    return this.http.post<any>(url, newOrder);
    // return of(this.newOrder);

  }


  ngOnInit(): void {
    
  }
}
