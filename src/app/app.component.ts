import { Component } from '@angular/core';
declare var OzLiveness: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-oz';

  openCamera() {
    OzLiveness.open({
      lang: 'en',
      token: 'c81ba7ff9174e79271570eba350217c5c777cbc3e1acf264769663c1eacfcc11702c04482b0fa9607c51ec73db972504f286c84dcce0ffeed0338a02439afe6f',
      on_complete: function (result: any) {
        console.log(result)
      }
    });
  }
}
