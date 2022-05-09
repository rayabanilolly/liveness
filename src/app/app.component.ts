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
      token: '2e9f03ac94f79a178a9615144833b2298c4f3541abd91a94808b79b78df5b342ad3a66849347e541c376394fdc7d4c27d5aed234c707b8292c998c3ea2a3681b',
      on_complete: function () {
        alert('Human');
      }
    });
  }
}
