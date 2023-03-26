import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportBugPageRoutingModule } from './report-bug-routing.module';

import { ReportBugPage } from './report-bug.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportBugPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReportBugPage]
})
export class ReportBugPageModule {}
