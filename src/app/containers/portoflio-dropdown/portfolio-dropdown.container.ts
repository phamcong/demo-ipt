import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-portfolio-dropdown',
  templateUrl: './portfolio-dropdown.container.html',
  styleUrls: ['./portfolio-dropdown.container.scss']
})
export class PortfolioDropdownContainer implements OnInit {

  portfolios: any[]
  isOpenPtfDropdown = false
  selectedPortfolio: any

  constructor( private ds: DataService ) {}

  ngOnInit() {
    this.portfolios = []
    for (let i = 1; i < 10; i++) {
      this.portfolios.push({
        heading: `Amundi Cac 40 ${i}`,
        label: `A ${i}`,
        index: { label: `Index ${i}`, name: `Index Name ${i}`}
      })
    }
    this.ds.currentSelectedPtf.subscribe((selectedPtf) => this.selectedPortfolio = selectedPtf)
  }

  togglePtfDropdown = () => {
    this.isOpenPtfDropdown = !this.isOpenPtfDropdown
  }

  onClickPtf = (portfolio) => {
    portfolio.isSelected = !portfolio.isSelected
    this.selectedPortfolio.isSelected = false
    this.selectedPortfolio = portfolio.isSelected ? portfolio : {}
    this.ds.changeSelectedPtf(this.selectedPortfolio)
  }
}
