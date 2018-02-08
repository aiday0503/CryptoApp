import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value: number;
  input: string;
  amount = 0;

  
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
  }
 onBuy(){
  if(this.input == "1" ){
   this.amount ++
   console.log("You bought your coin", this.amount)
  }
 }
}
