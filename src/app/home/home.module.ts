import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeadingComponent } from "../components/heading/heading.component";
import { WorkoutsComponent } from "../components/workouts/workouts.component";
import { WorkoutByLevelComponent } from "../components/workout-by-level/workout-by-level.component"
import { WorkoutByGoalComponent } from "../components/workout-by-goal/workout-by-goal.component"
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [
    HomePage,
    HeadingComponent,
    WorkoutsComponent,
    WorkoutByLevelComponent,
    WorkoutByGoalComponent
  ],
  exports:[

  ],
})
export class HomePageModule {}
