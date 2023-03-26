import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-report-bug',
  templateUrl: './report-bug.page.html',
  styleUrls: ['./report-bug.page.scss'],
})
export class ReportBugPage implements OnInit {
  reportBugForm: FormGroup
  constructor() {
    this.reportBugForm = new FormGroup({ 
      'name'    : new FormControl('', Validators.compose([Validators.required])),
      'email'   : new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      'phone_country_code': new FormControl('+91', Validators.compose([Validators.required])),
      'phone'   : new FormControl('', Validators.compose([Validators.required])),
      'subject' : new FormControl('', Validators.compose([Validators.required])),
      'description' : new FormControl('', Validators.compose([Validators.required])),     
    });
  }

  ngOnInit() {
  }

  submit_bug_report(){
    
  }
}
