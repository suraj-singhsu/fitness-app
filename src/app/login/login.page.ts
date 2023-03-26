import { Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { Preferences } from '@capacitor/preferences';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  loginForm = new FormGroup({
    username: new FormControl('kminchelle'),
    password: new FormControl('0lelplR'),
  });
  constructor(
    public commonService: CommonService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  doLogin(){
    let sendData = {
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    };
    this.commonService.showLoader("authenticating..");
    this.commonService.login(sendData).subscribe((res : any) => {
      console.log("res:", res);
      this.commonService.dismissLoader();
      if(res['token']){
        Preferences.set({
          "key": "loginInfo", 
          "value": JSON.stringify(res)
        });
        this.router.navigate(['home']);
      }else{
        console.log("Invalid username or password. Try again.");
      }
      
      // this.storage.set("loginInfo", res);
    });

  }

  show_hide_password() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
