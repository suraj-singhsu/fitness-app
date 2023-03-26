import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportedBugsPage } from './reported-bugs.page';

const routes: Routes = [
  {
    path: '',
    component: ReportedBugsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportedBugsPageRoutingModule {}
