import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginWithSocialMediaComponent } from "./login-with-social-media/login-with-social-media.component";
import { SingleWorkoutComponent } from "./single-workout/single-workout.component";
@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        FormsModule
    ],
    declarations: [
        LoginWithSocialMediaComponent,
        SingleWorkoutComponent,
    ],
    exports: [
        LoginWithSocialMediaComponent,
        SingleWorkoutComponent
    ],
    entryComponents: [
        
    ],
})
export class ComponentsModule {
    
}