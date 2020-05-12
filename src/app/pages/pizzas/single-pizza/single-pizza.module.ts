import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglePizzaPageRoutingModule } from './single-pizza-routing.module';

import { SinglePizzaPage } from './single-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglePizzaPageRoutingModule
  ],
  declarations: [SinglePizzaPage]
})
export class SinglePizzaPageModule {}
