import { Component, OnInit } from '@angular/core';
declare var OzLiveness: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-oz';

  ngOnInit() {
    this.openCamera()
  }

  openCamera() {
    const session = new Date;

    OzLiveness.open({
      lang: 'en',
      token: 'f95e368b4252a066aeb947120598b3be0f6954aff1f397d1dc571630e6e7d3b71e9449a50d0c802eca16f2bb57544bffcc54aecb18bb56aa890af2b7a91640d9',
      on_complete: function () {
        alert('Human');
      }
    });
  }
}
