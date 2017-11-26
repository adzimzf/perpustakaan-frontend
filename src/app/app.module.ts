import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';  // <-- HttpClient
import {InterceptorModule} from './interceptor.module';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BooksComponent} from './books/books.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
