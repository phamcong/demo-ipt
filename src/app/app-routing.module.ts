import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { DRSContainer } from './containers/drs/drs.container';

const routes: Routes = [
  { path: 'drs', component: DRSContainer }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
