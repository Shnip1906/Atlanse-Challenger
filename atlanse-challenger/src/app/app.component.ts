import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Chuck Norris Joke';

  constructor(public router: Router,) {
  }

  goToQuoteList(){
    this.router.navigate(['quote-list'])
  }

  goToHome(){
    this.router.navigate([''])
  }
}
