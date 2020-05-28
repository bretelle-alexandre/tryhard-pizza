import { Component, OnInit } from "@angular/core";
import { PizzasService } from "src/app/service/pizzas.service";
import {
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { ArticleComponent } from "../../article/article.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"]
})
export class AdminPage {
  constructor(
    public pizzasService: PizzasService,
    private resolver: ComponentFactoryResolver,
    private router: Router
  ) {}

  entry: ViewContainerRef;
  pizzasList: any[];
  tests: any;

  ionViewDidEnter() {
    const surveyFormFactory = this.resolver.resolveComponentFactory(
      ArticleComponent
    );

    console.log(this.pizzasList);
    this.getAllPizzas();
    console.log(this.pizzasList);
  }

  getAllPizzas() {
    this.pizzasService.getPizzas().subscribe(
      value => {
        this.pizzasList = value;
        let pizzapi = JSON.parse(JSON.stringify(value));

        console.log(pizzapi);
        this.tests = pizzapi;
      },
      erreur => {}
    );
  }

  deletePizza(id) {
    this.pizzasService.deletePizza(id).subscribe(x => {
      this.pizzasList = this.pizzasList.filter(pizzaDeLaliste => {
        return pizzaDeLaliste.id != id;
      });
    });
  }

  goPizza(id) {
    this.router.navigate(["update", id]);
  }
}
