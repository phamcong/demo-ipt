import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/services/data.service'
import indexGroups from 'src/app/data/indexGroups.json'

@Component({
  selector: 'app-index-dropdown',
  templateUrl: './index-dropdown.container.html',
  styleUrls: ['./index-dropdown.container.scss']
})
export class IndexDropdownContainer implements OnInit {

  indexs: any[]
  selectedPtf: any
  indexGroups: any[]
  selectedIndex: any = {}
  isOpenIndexDropdown: boolean = false

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.currentSelectedPtf.subscribe((selectedPtf) => {
      this.selectedPtf = selectedPtf
      this.indexGroups = this.groupObjectsByProp(indexGroups, 'provider')
      if (selectedPtf['heading']) {
        this.indexGroups.map(indexGroup => {
          indexGroup.children.map(index => {
            if (index['label'] === selectedPtf['index']['label']) {
              this.selectedIndex = index
              index.isSelected = true
            } else {
              index.isSelected = false
            }
          })
          // tslint:disable-next-line: max-line-length
          indexGroup.isOpen = indexGroup.children.filter(index => index.isSelected = index['label'] === selectedPtf['index']['label']).length > 0 ? true : false
          return indexGroup
        })
      }
    })
  }

  groupObjectsByProp = (objects, property) => {
    const values = []
    const groupedObjects = []
    objects.map(object => {
      if (values.indexOf(object[property]) === -1) {
        values.push(object[property])
      }
    })
    values.map(value => {
      const groupedObject = {}
      groupedObject[property] = value
      groupedObject['children'] = objects.filter(object => object[property] === value).map(object => { return object.index })
      groupedObject['isOpen'] = false
      groupedObjects.push(groupedObject)
    })
    return groupedObjects
  }

  toggleIndexDropdown = () => {
    this.isOpenIndexDropdown = !this.isOpenIndexDropdown
  }
}
