// Actions> 

import { createStore } from "@reduxjs/toolkit"

//> action to add a todo items 
const my ={ type : "ADD_TODO", text : "This is a new todo"}
//  Action that pass a login payload 
const dmy = { type : "LOGIN", playload : { username : "foo", password : "bar"}} 

// takes in the current state and action 
// updates the value based on the actin's type 

function counterReducer9( state = {value : 0}, aciton){
    switch(aciton.type){
        case "INCREASE" : 
            return {
                value : state.value + 1 
             }
        
        case "DECREASE": 
            return { 
                value : state.value - 1
            }
        
        default : 
            return state
    }
}

// store => 
const store = createStore(myComponent); 

