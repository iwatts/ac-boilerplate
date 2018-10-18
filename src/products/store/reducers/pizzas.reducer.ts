import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';
import { Action } from 'rxjs/scheduler/Action';
import { state } from '@angular/core/src/animation/dsl';

export interface PizzaState {
    loaded: boolean;
    loading: boolean;
    pizzas: Pizza[];
}

const initialState: PizzaState = {
    loaded: false,
    loading: false,
    pizzas: []
};

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {
    const newState = {... state};
    
    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            newState.loading = true;
            newState.loaded = false;
            console.log('LoadPizzas', state);
            return newState;
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            newState.loading = false;
            newState.loaded = true;
            newState.pizzas = action.payload;
            return newState;
        }
    
    }
    
    return state;
}

export const getPizzas = (state: PizzaState) => state.pizzas;
export const getPizzasLoading = (state: PizzaState) => state.pizzas;
export const getPizzasLoaded = (state: PizzaState) => state.pizzas;

