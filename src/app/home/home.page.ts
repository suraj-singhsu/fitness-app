import { Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { Storage } from "@ionic/storage-angular";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public commonService: CommonService,
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  doLogin(){
    let sendData = {
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    };
    this.commonService.login(sendData).subscribe((res) => {
      console.log("res:", res);
      this.storage.set("loginInfo", res);
    });

  }
}
