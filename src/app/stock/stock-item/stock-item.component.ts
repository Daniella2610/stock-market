import { Stock } from './../../model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public Stock;

  constructor() { }

  ngOnInit() {
    this.Stock = new Stock('Test Stock Company', 'TSC', 85, 80)
  }
  toggleFavorite(event){
    this.Stock.favorite = !this.Stock.favorite; //Her er det hvordan boolan skifter
    console.log("Toggle state", this.Stock.favorite, event);

  }

}
