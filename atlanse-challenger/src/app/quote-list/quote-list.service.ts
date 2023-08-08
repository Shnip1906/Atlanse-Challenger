import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteListService {
  private quotes: { quote: string ; date: string}[] = [];

  addQuote(quote: any, date: any) {
    this.quotes.push({quote, date});
  }

  getQuotes(): { quote: string; date: string }[] {
    return this.quotes;
  }

  clearQuotes() {
    this.quotes = [];
  }
}
