import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "pizzas",
    loadChildren: () =>
      import("./pages/pizzas/pizzas.module").then(m => m.PizzasPageModule)
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./pages/admin/admin.module").then(m => m.AdminPageModule)
  },
  {
    path: "panier",
    loadChildren: () =>
      import("./pages/pizzas/single-pizza/single-pizza.module").then(
        m => m.SinglePizzaPageModule
      )
  },
  {
    path: "single-pizza",
    loadChildren: () =>
      import("../app/pages/pizzas/single-pizza/single-pizza.module").then(
        m => m.SinglePizzaPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
