import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loginInfo : any = [];
  app_menu: any = [];
  trainer_menu: any = [

  ];
  customer_menu: any = [
    
  ];
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Profile', url: '/profile', icon: 'paper-plane' },
    { title: 'Supports', url: '/supports', icon: 'heart' },
    { title: 'Report a Bug', url: '/reported-bugs', icon: 'warning' },
    { title: 'Terms & Conditions', url: '/terms-conditions', icon: 'archive' },
    { title: 'About Us', url: '/about-us', icon: 'trash' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    public router : Router,
    private alertController : AlertController
  ) {
    this.startApp();
  }

  async startApp(){
    let { value } = await Preferences.get({ key: 'loginInfo' });
    if(value != null){
      console.log("value:", value);
      this.loginInfo = JSON.parse(value);
      console.log("loginInfo:", this.loginInfo);
      
      this.router.navigate(['home']);
      // this.router.navigate(['workouts']);
    }else{
      console.log("User is not login.");
      // this.router.navigate(['']);
    }
    
  }
  async logout() {
    const alert = await this.alertController.create({
      header: 'Conformation',
      // subHeader: 'Important message',
      message: 'Are you sure want to logout?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          // this.handlerMessage = 'Alert canceled';
        },
      },
      {
        text: 'OK',
        role: 'Logout',
        handler: () => {
          // this.handlerMessage = 'Alert confirmed';
          Preferences.remove({ key: 'loginInfo' });
          this.router.navigate(['login']);
        },
      },],
    });

    await alert.present();
  }
}
