import { Component, Input, Output, EventEmitter, OnDestroy } from "@angular/core";

@Component({
  selector: 'app-table-component',
  templateUrl:'./app.table.view.html'
})
export class TableComponent implements OnDestroy {
  private _DataSource:Array<any>;
  tableColumns:Array<string>;
  private _CanEdit:boolean;
  private _CanDelete:boolean;

  //<app-table-component (rowSelected)="[METHDO-FROM-PARENT]">
  @Output()
  rowSelected:EventEmitter<any>;

  @Output()
  editClicked:EventEmitter<any>;

  @Output()
  deleteClicked:EventEmitter<any>;

  constructor(){
    this._DataSource = new Array<any>();
    this.tableColumns = new Array<string>();
    this.rowSelected = new EventEmitter<any>();
    this.editClicked = new EventEmitter<any>();
    this.deleteClicked =new EventEmitter<any>();
    this._CanDelete = false;
    this._CanEdit = false;
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
  @Input()
  set CanEdit(val:boolean){
    this._CanEdit = val;
  }

  get CanEdit():boolean {
    return this._CanEdit;
  }

  onEditClicked(rec:any):void {
    this.editClicked.emit(rec);
  }
  onDeleteClicked(rec:any):void {
    this.deleteClicked.emit(rec);
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
