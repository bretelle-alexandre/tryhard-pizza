import { Component, OnInit } from "@angular/core";
import { PizzasService } from "src/app/service/pizzas.service";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import Pizza from "src/app/model/Pizza";

@Component({
  selector: "app-update",
  templateUrl: "./update.page.html",
  styleUrls: ["./update.page.scss"]
})
export class UpdatePage implements OnInit {
  pizzaId: string;

  maPizzaUpdate: Pizza;

  constructor(
    public pizzaService: PizzasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pizzaId = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.pizzaService.getPizza(+this.pizzaId).subscribe(x => {
      this.maPizzaUpdate = x;
    });
  }

  updatePizza(form) {
    let maPizza: Pizza = {
      id: +this.pizzaId,
      ingredients: [],
      prix: form.prix,
      nom: form.nom,
      photo: form.picture
    };
    this.pizzaService.updatePizza(+this.pizzaId, maPizza).subscribe(x => {
      console.log(x);
      this.router.navigate(["admin"]);
    });
  }
}
