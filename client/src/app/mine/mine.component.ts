import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  value = 0;
  answer= null;
  output=[];
  input: number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  onMine(){
    if(this.input == 13){
      this.value++
      console.log("success", this.value);
      this.output=[]
    }else{
   this.output=['Sorry try again']
    }
   
  }
}
