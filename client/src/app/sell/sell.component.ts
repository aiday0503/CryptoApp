import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
value:number;
amount:number;
input:number;


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  onSell(){
    if(this.input == 1){
    this.value --;
    console.log("you have sold your coin", this.value)
    }
  }

}
