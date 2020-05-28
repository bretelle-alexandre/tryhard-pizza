import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<any[]> {
    return this.http.get<any[]>("https://api.ynov.jcatania.io/pizza");
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
}
