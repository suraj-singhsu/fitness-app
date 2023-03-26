import { Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  total_products: any = 0;
  products: any = [];
  device_platform: any = '';
  constructor(
    public commonService: CommonService,
    public platform: Platform
  ) {
    console.log(this.platform.platforms());
    console.log("-", this.platform.is('ios'));
    this.device_platform = JSON.stringify(this.platform.platforms());
  }

  ngOnInit() {
  
  }

  ionViewWillEnter(){
    console.log("qwerty");
    let sendData = {
      page_no: 1,
    }
    this.commonService.getWorkouts(sendData).subscribe((res : any) => {
      console.log("prod:", res);
      if(res['products']){
        this.products = res['products'];
        this.total_products = res['total'];
        console.log("products:", this.products);
        
      }
    });
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  

}
