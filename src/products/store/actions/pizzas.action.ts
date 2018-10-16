import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const MY_ACTION = '[Feature] My Action';

export class MyAction implements Action {
  readonly type = MY_ACTION;
  constructor(public payload: any) {}
}

// action types
export const LOAD_PIZZAS = '[Pizzas] Load';
export const LOAD_PIZZAS_FAIL = '[Pizzas] Load Fail';
export const LOAD_PIZZAS_SUCCESS = '[Pizzas] Load Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
    constructor(public payload: any) {}
}
export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}
export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {}
}


export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;