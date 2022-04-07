import { Component, OnInit } from '@angular/core';
declare var OzLiveness: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-oz';

  ngOnInit() { }

  openCamera() {
    OzLiveness.open({
      lang: 'en',
      token: '256fa59faef20ed34496190c4c8d9de2fd0ff8cddd90b358f57c89e75ccd003deb6ad1c0443485cd4ecb95d3a0cedc4a67fba246d2a4f5d6eac497127a5f7f32',
      action: ['photo_id_front', 'photo_id_back', 'video_selfie_scan'],
      on_complete: function () {
        alert('Human');
      }
    });
  }
}
