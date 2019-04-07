import { Component } from '@angular/core'
import { ICellRendererAngularComp } from 'ag-grid-angular'
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-drs-dropdown-renderer',
  templateUrl: './dropdown-renderer.html',
  styleUrls: ['./dropdown-renderer.scss']
})

export class DropdownRenderer implements ICellRendererAngularComp {
  public params: any
  public selectedItem: any
  public dropdownItems: any[]
  public isPopup

  agInit(params: any): void {
    this.params = params
    this.dropdownItems = [
      { 'name': 'Name 1', label: 'Label 1 '},
      { 'name': 'Name 2', label: 'Label 2 '},
      { 'name': 'Name 3', label: 'Label 3 '}
    ]
    this.selectedItem = this.dropdownItems[0]
    this.isPopup = () => {
      return true
    }
  }

  changeSelectedItem = (item) => {
    this.params.value = item.name
  }

  // isPopup(): boolean {
  //   return true
  // }


  refresh(): boolean {
    return false
  }
}


// import { INoRowsOverlayAngularComp } from 'ag-grid-angular'

// @Component({
//   selector: 'app-gender-renderer',
//   template: `
//       <span>
//         {{ value }}
//       </span>
//     `
// })
// export class DropdownRenderer implements INoRowsOverlayAngularComp {
//   private imageSource: string
//   private value: any

//   agInit(params): void {
//     this.value = params.value
//   }
// }