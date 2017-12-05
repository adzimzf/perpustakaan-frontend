import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';  // <-- HttpClient
import { RouterModule, Routes } from '@angular/router';
import { Select2Module } from 'ng2-select2';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BooksComponent} from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent},
  { path: 'books/add', component: AddBookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Select2Module,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
