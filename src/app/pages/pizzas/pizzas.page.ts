import { Component, OnInit } from "@angular/core";
import { PizzasService } from "src/app/service/pizzas.service";
import {
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { ArticleComponent } from "../../article/article.component";

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

  // tests = this.getAllPizzas();
  //   tests = [
  //   { name: "jojo", prix: "1" },
  //   { name: "rere", prix: "5" }
  // ];

  tests: any;

  getAllPizzas() {
    //  this.pizzasList = await this.pizzasService.getPizzas().toPromise();

    this.pizzasService.getPizzas().subscribe(
      value => {
        this.pizzasList = value;
        let pizzapi = JSON.parse(JSON.stringify(value));
        // let pizzapi = JSON.stringify(value);

        console.log(pizzapi);
        this.tests = pizzapi;
        // var zert = new Array()
        // return ["pizzapi", "zet", "eqf"];
      },
      erreur => {
        //show error
      }
    );
  }

  addToBasket() {
    console.log("AddToBasket");
  }

  // tests = this.getAllPizzas;

  getAllPizzasV2() {
    //  this.pizzasList = await this.pizzasService.getPizzas().toPromise();

    this.pizzasService.getPizzas().subscribe(
      value => {
        this.pizzasList = value;
        let pizzapi = JSON.parse(JSON.stringify(value));
        console.log(pizzapi);
      },
      erreur => {
        //show error
      }
    );
  }
}
