import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  workouts: any = [];
  page_no: number = 1;
  infinite_scroll_obj: any;
  is_spinner : any = "off";

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.get_workouts();
  }
  
  get_workouts(){
    let sendData = {
      page_no: this.page_no,
    }
    this.is_spinner = "on";
    this.commonService.getWorkouts(sendData).subscribe((res : any) => {
      console.log("prod:", res);
      this.is_spinner = "off";
      if(this.infinite_scroll_obj){
        this.infinite_scroll_obj.target.complete();
      }
      if(res['products']){
        // this.workouts = res['products']; 
       this.workouts = [ ...this.workouts, ...res['products']];
        console.log("workouts:", this.workouts);
      }
    }, (err) => {
      this.is_spinner = "off";
      console.log("err:", err);
      if(this.infinite_scroll_obj){
        this.infinite_scroll_obj.target.complete();
      }
    });
  }

  onIonInfinite(ev: any){
    this.infinite_scroll_obj = ev;
    this.page_no++;
    console.log("page_no:", this.page_no);
    this.get_workouts();
    // console.log("Ev:", ev);
    // ev.target.complete();
  }
}
