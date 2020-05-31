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
  tun;
  tdeux;

  ionViewDidEnter() {
    this.stored_datas = JSON.parse(localStorage["pizzArray"]);
    console.log(this.stored_datas);

    if (this.stored_datas == null) {
      // affiche <p>Votre panier est vide</p>
      document.getElementById("empty").style.display = "block";
    } else {
      // affiche le panier
      document.getElementById("empty").style.display = "none";
    }

    this.tun = JSON.stringify(this.stored_datas);
    this.tdeux = JSON.parse(this.tun);
    console.log("tun : " + this.tun);
    console.log("tdeux : " + this.tdeux);
  }

  // tabPizza = JSON.parse(this.someth);

  // Get BasketArray

  // Show BasketArray
  // CRUD lowcost BasketArray
}
