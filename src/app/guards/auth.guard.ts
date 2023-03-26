import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from "../services/common.service";
import { NavController } from "@ionic/angular";
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loginInfo: any = [];
  constructor(
    private commonService: CommonService,
    private navCtrl: NavController
  ) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return await this.checkAuth();
  }

  private async checkAuth() {
    let { value } = await Preferences.get({ key: 'loginInfo' });
    if(value != null){
      this.loginInfo = JSON.parse(value);
      // this.router.navigate(['home']);
      return true;
    }else{
      // this.router.navigate(['']);
      this.navCtrl.navigateRoot('/login');
      return false;
    } 
  }

  
}
