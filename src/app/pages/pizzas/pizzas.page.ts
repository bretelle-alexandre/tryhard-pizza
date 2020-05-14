import { Component, OnInit } from "@angular/core";
import { PizzasService } from "src/app/service/pizzas.service";

@Component({
  selector: "app-pizzas",
  templateUrl: "./pizzas.page.html",
  styleUrls: ["./pizzas.page.scss"]
})
export class PizzasPage {
  constructor(public pizzasService: PizzasService) {}

  pizzasList: any[];

  ionViewDidEnter() {
    console.log(this.pizzasList);
    this.getAllPizzas();
    console.log(this.pizzasList);
  }

  getAllPizzas() {
    //  this.pizzasList = await this.pizzasService.getPizzas().toPromise();

    this.pizzasService.getPizzas().subscribe(
      value => {
        this.pizzasList = value;
        console.log(value);
      },
      erreur => {
        //show error
      }
    );
  }
}
