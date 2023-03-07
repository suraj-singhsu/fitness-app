import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  workouts : any = [{
    id: 1,
    image :"https://picsum.photos/id/231/400/200",
    title : "Workout 1",
    desc: "qwerty1 qwerty1 qwerty1"
  },{
    id: 2,
    image :"https://picsum.photos/id/232/400/200",
    title : "Workout 2",
    desc : "qwerty2 qwerty2 qwerty2 "
  },{
    id: 3,
    image :"https://picsum.photos/id/233/400/200",
    title : "Workout 3",
    desc : "qwerty3 qwerty3 qwerty3 "
  },{
    id: 4,
    image :"https://picsum.photos/id/234/400/200",
    title : "Workout 4",
    desc : "qwerty4 qwerty4 qwerty4 "
  },{
    id: 5,
    image :"https://picsum.photos/id/235/400/200",
    title : "Workout 5",
    desc : "qwerty5 qwerty5 qwerty5 "
  }
];
  constructor() { }

  ngOnInit() {}

}
