import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportedBugsPageRoutingModule } from './reported-bugs-routing.module';

import { ReportedBugsPage } from './reported-bugs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportedBugsPageRoutingModule
  ],
  declarations: [ReportedBugsPage]
})
export class ReportedBugsPageModule {}
