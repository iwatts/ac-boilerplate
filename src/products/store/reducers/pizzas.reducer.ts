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
    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            const loading = true;
            const loaded = false;

            console.log('LoadPizzas', state);

            return {
                ... state,
                loading,
                loaded
            };
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            const loading = false;
            const loaded = true;
            const pizza = action.payload; 
        }
    
    }
    
    return state;
}

export const getPizzas = (state: PizzaState) => state.pizzas;


