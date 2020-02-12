import { State } from "@ngrx/store";

function demofunction (actions, type) {
    switch(actions) {
        case ADD_ELEM :
            return State.map(elem => {
                if(elem === x){
                    state[elem]++
                    return elem
                }
            })
    }
}