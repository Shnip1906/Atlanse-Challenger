import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseURL = 'https://api.chucknorris.io/jokes';
  private dateLastSearch: string = "";


  constructor(private httpClient: HttpClient,) {}

  getQuotes():Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/random`);
  }

  getSearchedQuote(param: string | undefined){
    return this.httpClient.get<any>(`${this.baseURL}//search?query=${param}`);
  }

  saveLastDate(date: string){
    this.dateLastSearch = date;
  }

  getLastDate(): string {
    return this.dateLastSearch;
  }
}
