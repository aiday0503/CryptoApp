import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { LedgerComponent } from './ledger/ledger.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';
import { Observable } from "rxjs/Rx";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    SellComponent,
    BuyComponent,
    LedgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
