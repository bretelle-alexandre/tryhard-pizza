import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglePizzaPage } from './single-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: SinglePizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePizzaPageRoutingModule {}
