import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { LoadingController, Platform } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loading : any;
  loginInfo: any = [];
  constructor(
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    public platform: Platform
  ) { }

  get_URL(){
    if(this.platform.is('mobile') ){
      return "https://dummyjson.com";
    }else if(this.platform.is('desktop')){
      return "http://127.0.0.1:8000/api";
    }else{
      return "https://dummyjson.com";
    }
  }
  async isLoggedIn(){
    let { value } = await Preferences.get({ key: 'loginInfo' });
    if(value != null){
      console.log("value:", value);
      this.loginInfo = JSON.parse(value);
      console.log("loginInfo:", this.loginInfo);
      
      // this.router.navigate(['home']);
    }else{
      console.log("User is not login.");
      // this.router.navigate(['']);
    }
  }

  getWorkouts(sendData : any = []){
    let limit = (sendData['limit'] ) ? sendData['limit'] : 10;
    let page_no = (sendData['page_no']) ? sendData['page_no'] : 1;
    let skip = limit*(page_no-1);

    let API_URL = this.get_URL();
    
    if(this.platform.is('mobile') ){
      API_URL+= "/products?limit="+limit+"&skip="+skip;
    }else if(this.platform.is('desktop')){
      API_URL+= "/workouts";
    }
    console.log("getWorkouts()->API_URL:", API_URL);
    
    return this.http.get(API_URL, {});
  }


  login(sendData: any){
    let API_URL = "https://dummyjson.com/auth/login";
    return this.http.post(API_URL, sendData);
    // fetch('', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: 'kminchelle',
    //     password: '0lelplR',
    //     // expiresInMins: 60, // optional
    //   })
    // }).then(res => res.json()
    // ).then(console.log);
  }

  async showLoader(message : any = "") {
    message = (message != null && message != '') ? message : "Loading..";
    this.loading = await this.loadingCtrl.create({
      message: message,
      // duration: 3000,
    });
    this.loading.present();
  }

  dismissLoader(){
    this.loading.dismiss();
  }
}
