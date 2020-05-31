import { Component, OnInit, Input } from "@angular/core";
import { empty } from "rxjs";
// import { PizzasPage, addToBasket } from "../pizzas/pizzas.page";

@Component({
  selector: "app-panier",
  templateUrl: "./panier.page.html",
  styleUrls: ["./panier.page.scss"]
})
export class PanierPage {
  constructor() {}
  stored_datas = [];
  total: number = 0;

  ionViewDidEnter() {
    this.stored_datas = JSON.parse(localStorage["pizzArray"]);

    if (this.stored_datas == null) {
      document.getElementById("empty").style.display = "block";
    } else {
      document.getElementById("empty").style.display = "none";
      document.getElementById("notEmpty").style.display = "flex";
    }

    this.stored_datas.forEach(element => {
      this.total += +element.prix;
    });
    console.log(this.total);
  }
}
