import { Component, OnInit, ChangeDetectionStrategy, state } from '@angular/core';
import { Store } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';

import * as fromStore from '../../store';
import { LoadPizzas } from '../../store';
import { Action } from 'rxjs/scheduler/Action';
//import { any } from 'bluebird';

@Component({
  selector: 'products',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})

export class ProductsComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaService: PizzasService, private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPizzas(state));
    this.pizzaService.getPizzas().subscribe(pizzas => {
        this.pizzas = pizzas;
    });
    
  }
}
