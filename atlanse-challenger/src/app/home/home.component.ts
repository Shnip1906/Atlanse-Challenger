import {Component, OnInit} from '@angular/core';
import {HomeService} from "./home.service";
import {QuoteListService} from "../quote-list/quote-list.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  quote: any;
  quotesSearched: any;
  latestSearch: any;

  constructor(
    public HomeService: HomeService,
    public quoteListService: QuoteListService,
  ) {
  }

  ngOnInit() {
    this.getQuoteFromChuck()
    this.latestSearch = this.HomeService.getLastDate()
  }

  getQuoteFromChuck(){
    this.HomeService.getQuotes().subscribe(
      (response) => {
        this.quote = response.value;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getQuoteSearchFromChuck(){
    const now = new Date()
    const search = document.getElementById("search") as HTMLInputElement | null;
    this.HomeService.getSearchedQuote(search?.value).subscribe(
      (response) => {
        let result = response.result;

        this.quotesSearched = this.getRandomQuote(result).value
        this.quoteListService.addQuote(this.quotesSearched, this.getRandomQuote(result).created_at)

        this.latestSearch = now.toUTCString()
        this.HomeService.saveLastDate(now.toUTCString().toString())
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getRandomQuote(result: any) {
    const randomQuote = Math.floor(Math.random() * result.length);
    return result[randomQuote];
  }

}
