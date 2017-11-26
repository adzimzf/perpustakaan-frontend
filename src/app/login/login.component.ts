import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  model: any = {};
  username = '';
  password = '';
  results = {};
  errr: String = 'tes dulu';
  error = {
    username : {
      valid : 'valid',
      pesan : ''
    },
    password : {
      valid : 'valid',
      pesan : ''
    }
  };
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVTUi0xMjMiLCJpYXQiOjE1MTA5NzQxOTF9.OYP5M7f6zlmsdRYLK1733ZL5wszruaA9YYevOXWE-Wk';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  loginProcess(uname: string, pass: string) {
    const body = {username: uname, password: pass};
    this.http.post('http://localhost:3000/users/login', body, {
      headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    }).subscribe(data => {
      console.log(data);
      if (data['status'] === 200) {
        this.results = 'berhasil';
      } else if (data['status'] === 300) {
        if (data['message'].includes('username')) {
          this.error.username.valid = 'invalid';
          this.error.username.pesan = data['message'];
        } else if (data['message'].includes('password')) {
          this.error.password.valid = 'invalid';
          this.error.password.pesan = data['message'];
        } else {
          this.error.username.valid = 'invalid';
          this.error.username.pesan = data['message'];
          this.error.password.valid = 'invalid';
          this.error.password.pesan = data['message'];
        }
      }
    },
      err => {
        this.results = 'error' + JSON.stringify(err);
        console.log(err);
      });
  }
}
