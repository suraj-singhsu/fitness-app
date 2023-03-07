import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  login(sendData: any){
    let API_URL = "https://dummyjson.com/auth/login";
    return this.http.post(API_URL, sendData);
    fetch('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
  })
}).then(res => res.json()
).then(console.log);
  }
}
