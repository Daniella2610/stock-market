import { Stock } from 'src/app/model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  //public stock: Stock;
  public stocks: Array<Stock>;

  //public stockClasses;

  constructor() { }

  ngOnInit() {
    this.stocks =[ 
      new Stock('Test Stock Company', 'TSC', 85, 70),
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Test Stock Company', 'TSC', 85, 90)];
   /*
      let diff = (this.stock.price/ this.stock.previousPrice) - 1;
      let largeChange = Math.abs(diff)> 0.01;
      this.stockClasses = {//Objekt med 4 keys
        "positive": this.stock.isPositiveChange(),
        "negative": !this.stock.isPositiveChange(),
        "large-change": largeChange,
        "small-change": !largeChange
   */

    
  }
  toggleFavorite(event, index){
    this.stocks[index].favorite = !this.stocks[index].favorite; //Her er det hvordan boolan skifter
    console.log("Toggle state", this.stocks[index].favorite, event);

  }
  trackStockByCode(index, stock) {
    console.log( stock.code, "track by code")
    return stock.code;
    }
}
