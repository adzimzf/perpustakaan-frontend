import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  Pengarangs = Array<Select2OptionData>();
  buku = {};
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVTUi0xMjMiLCJpYXQiOjE1MTE5OTY4OTN9.I-X2AG_opsRf2KReFMOJ_kvXB997ZA-CRIJjpI9VzL4';

  constructor(private http: HttpClient) {
    this.getListPengarang();
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.valid);
    const body = {
      judul : f.value.judul
    };
    console.log(body);
    // this.http.post('http://localhost:3000/buku/tambah', body, {
    //   headers: new HttpHeaders().set('Authorization', this.token)
    // });
  }

  getListPengarang() {
    this.http.get('http://localhost:3000/pengarang', {
      headers: new HttpHeaders().set('Authorization', this.token),
    }).subscribe((result) => {
      this.Pengarangs = result['data'];
      console.log(this.Pengarangs);
    });
  }
}
