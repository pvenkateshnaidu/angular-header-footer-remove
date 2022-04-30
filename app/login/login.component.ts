import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  id: number = 13;
  url: string = 'http://kanishkkunal.com?id=1';
  constructor() {}

  ngOnInit() {
    this.url = this.url + this.id;
  }
  clickon() {
    window.open(
      'http://kanishkkunal.com?id=' + this.id,
      'popup',
      'width=600,height=600'
    );
  }
}
