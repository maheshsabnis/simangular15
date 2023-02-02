import { Component, Input, Output, EventEmitter, OnDestroy } from "@angular/core";

@Component({
  selector: 'app-table-component',
  templateUrl:'./app.table.view.html'
})
export class TableComponent implements OnDestroy {
  private _DataSource:Array<any>;
  tableColumns:Array<string>;

  private _CanDelete:boolean;

  //<app-table-component (rowSelected)="[METHDO-FROM-PARENT]">
  @Output()
  rowSelected:EventEmitter<any>;

  constructor(){
    this._DataSource = new Array<any>();
    this.tableColumns = new Array<string>();
    this.rowSelected = new EventEmitter<any>();
    this._CanDelete = false;
  }

  ngOnDestroy(): void {
     // Release all resources
  }


  // This will be used for Property Bindig
  // <app-table-component [DataSource]=""></app-table-component>
  @Input()
  set DataSource(val:Array<any>){
    this._DataSource = val;
    // Generate Columns
    this.tableColumns = Object.keys(this._DataSource[0]);
  }

  get DataSource():Array<any>{
    return this._DataSource;
  }

  @Input()
  set CanDelete(val:boolean){
    this._CanDelete = val;
  }

  get CanDelete():boolean {
    return this._CanDelete;
  }




  onRowSelected(rec:any):void {
    // Emit the value to the Subcriber
    // emit() methdo will call 'dispatchEvent()'
    // the 'details' as event parameter
    // the 'details' will be read by the
    // event subscriber (Perent-Component) using $event object
    this.rowSelected.emit(rec);
  }

}
