import { Component } from '@angular/core'
import { DropdownRenderer } from './dropdownRenderer/dropdown-renderer'
import 'ag-grid-enterprise'
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-drs',
  templateUrl: './drs.container.html',
  styleUrls: ['./drs.container.scss']
})

export class DRSContainer {
  private gridApi
  private columnDefs
  private rowData
  private frameworkComponents
  private getRowHeight
  private defaultColDef

  constructor() {
    this.columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model', cellRenderer: 'dropdownRenderer', editable: true, cellClass: "actions-button-cell" },
      { headerName: 'Price', field: 'price' }
    ]

    // this.columnDefs = [
    //   { headerName: 'Make', field: 'make' },
    //   {
    //     headerName: 'Model', field: 'model',
    //     cellRenderer: 'dropdownRenderer',
    //     cellEditor: 'agRichSelectCellEditor',
    //     cellEditorParams: {
    //       values: ['Male', 'Female'],
    //       cellRenderer: 'dropdownRenderer'
    //     }
    //   },
    //   { headerName: 'Price', field: 'price' }
    // ]

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]

    this.frameworkComponents = {
      dropdownRenderer: DropdownRenderer
    }

    this.getRowHeight = (params) => {
      return 30
    }

    this.defaultColDef = {
      editable: true,
      resizable: true
    }
  }

  onGridReady = (params) => {
    this.gridApi = params.api

    params.api.sizeColumnsToFit()
  }
}