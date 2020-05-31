import { Component, OnInit } from "@angular/core";
import { PizzasService } from "src/app/service/pizzas.service";
import {
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { ArticleComponent } from "../../article/article.component";

export module addToBasket {}
@Component({
  selector: "app-pizzas",
  templateUrl: "./pizzas.page.html",
  styleUrls: ["./pizzas.page.scss"]
})
export class PizzasPage {
  constructor(
    public pizzasService: PizzasService,
    private resolver: ComponentFactoryResolver
  ) {}

  @ViewChild("pizzaContainer", { read: ViewContainerRef })
  entry: ViewContainerRef;
  pizzasList: any[];

  ionViewDidEnter() {
    const surveyFormFactory = this.resolver.resolveComponentFactory(
      ArticleComponent
    );
    const component = this.entry.createComponent(surveyFormFactory);

    console.log(this.pizzasList);
    this.getAllPizzas();
    console.log(this.pizzasList);
  }

  tests: any;

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

  addToBasket(pizza) {
    console.log("AddToBasket");
    console.log(pizza);
    let arr = [];

    if (localStorage.getItem("pizzArray")) {
      arr = JSON.parse(localStorage.getItem("pizzArray"));
      localStorage.setItem("pizzArray", JSON.stringify(arr));
    }
    arr.push(pizza);
    localStorage.setItem("pizzArray", JSON.stringify(arr));
  }
}
