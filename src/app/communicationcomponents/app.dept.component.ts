import { Component, OnInit } from '@angular/core';
import { Department, Departments } from 'src/models/app.data.model';
import { CommunicationService } from '../services/app.communication.service';

@Component({
  selector: 'app-dept-component',
  templateUrl: './app.dept.view.html'
})

export class DeptComponent implements OnInit {
  dept:Department;

  departments = Departments;
  constructor(private serv:CommunicationService) {
    this.dept = new Department(0,'');

  }

  ngOnInit() { }

  getSelectedDept(event:any): void {
     this.dept = event;
     // Pass data to service
     this.serv.onNotify(this.dept.DeptNo);
  }

}
