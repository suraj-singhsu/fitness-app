import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-single-workout',
  templateUrl: './single-workout.component.html',
  styleUrls: ['./single-workout.component.scss'],
})
export class SingleWorkoutComponent implements OnInit {
  @Input() item : any = {};
  @Input() label : string = "Heading";
  constructor() {
    // setTimeout(() => {
    //   console.log("item:", this.item);
    // console.log("label:", this.label);
    // }, 1000);
    
    
  }

  ngOnInit() {}

  
}
