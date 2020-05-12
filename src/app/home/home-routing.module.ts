import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'pizzas',
    loadChildren: () => import('../pages/pizzas/pizzas.module').then( m => m.PizzasPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('../pages/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../pages/admin/admin.module').then( m => m.AdminPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
