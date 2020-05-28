import { Component, OnInit } from "@angular/core";
import { PizzasService } from "src/app/service/pizzas.service";
import {
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

@Component({
  selector: "app-new",
  templateUrl: "./new.page.html",
  styleUrls: ["./new.page.scss"]
})
export class NewPage {
  constructor(public pizzasService: PizzasService) {}

  ionViewDidEnter() {
    this.getAllPizzas();
  }

  @ViewChild("pizzaContainer", { read: ViewContainerRef })
  entry: ViewContainerRef;
  pizzasList: any[];
  tests: any;

  getAllPizzas() {
    this.pizzasService.getPizzas().subscribe(
      value => {
        this.pizzasList = value;
        let pizzapi = JSON.parse(JSON.stringify(value));

        this.tests = pizzapi;
        console.log(pizzapi);
        console.log("done dude");
      },
      erreur => {}
    );
  }

  createPizza() {}
  deletePizza() {}
  updatePizza() {}
}
