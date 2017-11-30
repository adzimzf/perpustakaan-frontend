import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVTUi0xMjMiLCJpYXQiOjE1MTE5OTY4OTN9.I-X2AG_opsRf2KReFMOJ_kvXB997ZA-CRIJjpI9VzL4';
  heros = [];
  totalPages = [];
  activePage = 1;
  indexList = (this.activePage - 1) * 10;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/buku/list', {
      headers: new HttpHeaders().set('Authorization', this.token),
    }).subscribe(data => {
      console.log(data);
      for (let _i = 1; _i <= data['data'].totalPages; _i++) {
        this.totalPages.push(_i);
      }
      this.heros = data['data'].data;
    });
  }

  ngOnInit() {
  }

  nextPage() {
    this.activePage += 1;
    this.indexList = (this.activePage - 1) * 10;
    this.reqServer(this.activePage);

  }

  prevPage() {
    this.activePage -= 1;
    this.indexList = (this.activePage - 1) * 10;
    this.reqServer(this.activePage);
  }

  toPage(num: Number) {
    console.log('num');
  }

  edit(id: String) {
    console.log('edit ' + id);
  }

  delete(id: String) {
    console.log('hapus ' + id);
  }

  reqServer(page: Number) {
    this.totalPages = [];
    this.http.get('http://localhost:3000/buku/list?page=' + page, {
      headers: new HttpHeaders().set('Authorization', this.token),
    }).subscribe(data => {
      console.log(data);
      for (let _i = 1; _i <= data['data'].totalPages; _i++) {
        this.totalPages.push(_i);
      }
      this.heros = data['data'].data;
    });
  }

}
