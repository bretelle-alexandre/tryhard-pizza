import { Component, OnInit, Input } from "@angular/core";
import { PizzasPage, addToBasket } from "../pizzas/pizzas.page";

@Component({
  selector: "app-panier",
  templateUrl: "./panier.page.html",
  styleUrls: ["./panier.page.scss"]
})
export class PanierPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(PizzasPage);
    console.log(addToBasket);
  }
  helloWorld = "Hello World";
  prix = 12;
  total = this.prix + " €";

  // Get BasketArray

  // Show BasketArray
  // CRUD lowcost BasketArray
}
