import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee, Employees } from 'src/models/app.data.model';
import { CommunicationService } from '../services/app.communication.service';

@Component({
  selector: 'app-emp-component',
  templateUrl: './app.emp.view.html'
})

export class EmpComponent implements OnInit, OnDestroy {
  emp:Employee;
  emps:Array<Employee>;
  employees = Employees;
  constructor(private serv:CommunicationService) {
    this.emp = new Employee(0,'',0);
    this.emps = new Array<Employee>();
    this.emps = this.employees;
  }

  // Let the component subscribe to the
  // event emitted by the service
  ngOnInit() {
    console.log('ng on init is called');
    // id is the data emitted by the service
    this.serv.notify.subscribe((id)=>{
       console.log(`Received Data = ${id}`);
       this.emps = this.employees.filter((e,i)=>{
          return e.DeptNo === id;
       });
    });
  }
  ngOnDestroy(): void {
      // Remove the subscription
      // when this component is removed from DOM
      // all of its subscriptions will be released
      this.serv.notify.unsubscribe();
  }
}
