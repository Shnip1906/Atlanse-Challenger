import {Component, OnInit} from '@angular/core';
import {QuoteListService} from "./quote-list.service";
import {LocalStorageService} from "./local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit{

  quoteList: { quote: string ; date: string}[] = [];

  constructor(
    public quoteListService: QuoteListService,
    public localStorageService: LocalStorageService,
    private router: Router
  ) {

  }

  ngOnInit() {
    if(this.quoteListService.getQuotes().length <= 0){
      this.loadQuote()
    }else{
      this.loadQuote()
      this.quoteList.push(...this.quoteListService.getQuotes())
    }
  }

  searchFromList(){
    let valueSearched;
    const search = document.getElementById("searchFromList") as HTMLInputElement | null;

    if(search?.value !== ""){
      valueSearched = this.checkString(search?.value);

      if(valueSearched === null){
        window.alert("Nothing found")
        return
      }
      this.quoteList = []
      this.quoteList = [valueSearched]
    }else{
      this.quoteList = []
      this.loadQuote()
      this.quoteList.push(...this.quoteListService.getQuotes())
    }
  }

  checkString(search: string | undefined): any {
    let found: { quote: string; date: string } | undefined ;
    found = this.quoteList.find(item => item.quote.includes(<string>search))

    if(found){
      return found;
    }else{
      return null;
    }
  }

  persistQuote(){
    this.quoteListService.clearQuotes()
    this.localStorageService.setItem('quote', JSON.stringify(this.quoteList))
    window.alert("List Saved")
  }

  loadQuote(){
    let quotesJsonType= this.localStorageService.getItem('quote')
    if (quotesJsonType) {
      this.quoteList = JSON.parse(quotesJsonType);
    }
  }

  clearQuote(){
    this.localStorageService.clear()
    this.reloadCurrentRoute()
    window.alert("List Cleared")
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
      this.ngOnInit()
    });
  }


}
