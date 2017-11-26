import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVTUi0xMjMiLCJpYXQiOjE1MTA5NzQxOTF9.OYP5M7f6zlmsdRYLK1733ZL5wszruaA9YYevOXWE-Wk';
  heros = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/buku/list', {
      headers: new HttpHeaders().set('Authorization', this.token),
    }).subscribe(data => {
      console.log(data);
      this.heros = data['data'].data;
    });
  }

  ngOnInit() {
  }

  edit(id: String) {
    console.log('edit ' + id);
  }

  delete(id: String) {
    console.log('hapus ' + id);
  }

}
