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
    console.log('button clicked');

    OzLiveness.open({
      lang: 'en',
      token: '84b10f0fe3151418daba2efe017cc97fb2a290cfe1952b545c1f9bb5163acba34112890d6c293b55d96a3dcbc2b286828bcf5636c534985686697df3b6fd21cd',
      on_complete: function () {
        alert('Human');
      }
    });
  }
}
