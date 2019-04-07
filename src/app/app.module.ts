import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PortfolioDropdownContainer } from './containers/portoflio-dropdown/portfolio-dropdown.container'
import { IndexDropdownContainer } from './containers/index-dropdown/index-dropdown.container'
import { DataService } from './services/data.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { DRSContainer } from './containers/drs/drs.container'
import { AgGridModule } from 'ag-grid-angular'
import { DropdownRenderer } from './containers/drs/dropdownRenderer/dropdown-renderer'

@NgModule({
  declarations: [
    AppComponent,
    PortfolioDropdownContainer,
    IndexDropdownContainer,
    DRSContainer,
    DropdownRenderer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    AgGridModule.withComponents([DropdownRenderer])
  ],
  exports: [
    NgbModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
