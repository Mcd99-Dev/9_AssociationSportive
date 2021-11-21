import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsGymnaseComponent } from './details-gymnase/details-gymnase.component';
import { DetailsSportifComponent } from './details-sportif/details-sportif.component';
import { ListerGymnaseComponent } from './lister-gymnase/lister-gymnase.component';
import { ListerSportifComponent } from './lister-sportif/lister-sportif.component';

const routes: Routes = [

  {path: 'gymnase', component: ListerGymnaseComponent},
  {path: 'sportif', component: ListerSportifComponent},
  {path: 'sportif/:id', component: DetailsSportifComponent},
  {path: 'gymnase/:id', component: DetailsGymnaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
