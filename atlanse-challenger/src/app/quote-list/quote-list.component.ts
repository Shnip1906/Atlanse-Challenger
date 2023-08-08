import {Component, OnInit} from '@angular/core';
import {QuoteListService} from "./quote-list.service";

@Component({
  selector: 'quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit{

  quoteList: { quote: string ; date: string}[] = [];

  constructor(
    public quoteListService: QuoteListService,
  ) {

  }

  ngOnInit() {
    this.quoteList = this.quoteListService.getQuotes()
  }

  searchFromList(){
    const search = document.getElementById("searchFromList") as HTMLInputElement | null;

  }
}
