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
    let valueSearched;
    const search = document.getElementById("searchFromList") as HTMLInputElement | null;

    if(search?.value !== ""){
      valueSearched = this.checkString(search?.value);

      this.quoteList = []
      this.quoteList = [valueSearched]
    }else{
      this.quoteList = []
      this.quoteList = this.quoteListService.getQuotes()
    }
  }

  checkString(search: string | undefined): any {
    let found: { quote: string; date: string } | undefined ;
    found = this.quoteList.find(item => item.quote.includes(<string>search))

    if(found){
      return found;
    }else{
      console.log("Quote not found")
    }
  }
}
