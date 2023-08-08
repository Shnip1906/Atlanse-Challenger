import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuoteListComponent} from "./quote-list/quote-list.component";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quote-list', component: QuoteListComponent,},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
