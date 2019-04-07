import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular7-bootstrap'
  portfolios: any[]

  ngOnInit() {
    this.portfolios = []
    for ( let i = 0; i < 10; i++ ) {
      this.portfolios.push({ heading: 'Amundi Cac 40', label: 'A' + i.toString() })
    }
  }

  onClickPortfolio = (btnPopover, portfolio) => {
    console.log(portfolio)
    btnPopover.open({ portfolio })
  }
}
