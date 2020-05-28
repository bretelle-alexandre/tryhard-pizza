import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Pizza from "../model/Pizza";

@Injectable({
  providedIn: "root"
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>("https://api.ynov.jcatania.io/pizza");
  }

  getPizza(id: Number): Observable<any> {
    return this.http.get<any>(
      `https://api.ynov.jcatania.io/pizza/${id.toString()}`
    );
  }

  deletePizza(id: Number): Observable<any> {
    return this.http.delete<any>(
      `https://api.ynov.jcatania.io/pizza/${id.toString()}`
    );
  }

  createPizza(pizza: Pizza): Observable<any> {
    return this.http.post<any>(`https://api.ynov.jcatania.io/pizza`, pizza);
  }

  updatePizza(id: Number, pizza: Pizza): Observable<any> {
    return this.http.put<any>(
      `https://api.ynov.jcatania.io/pizza/${id.toString()}`,
      pizza
    );
  }
}
