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
      token: '5f6dd74ec937171541b992b7f6d21dff1cbdc9a516bb511f7152fbdb751c590277e5cd99fc1980168675fb56c2d586f250d7e0ab276bc7a8dec86d0e5b5b176b',
      on_complete: function () {
        alert('Human');
      }
    });
  }
}
