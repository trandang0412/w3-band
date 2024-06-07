import { NEW_TODO, NEW_TIME, NEW_DATE } from "./types";


interface NewTodoAction {
    type: 'NEW_TODO'
    payload: string
}

interface NewTimeAction {
    type: 'NEW_TIME'
    payload: string
}

interface NewDateAction {
    type: 'NEW_DATE'
    payload: string
}

interface IInput {
    newTodo: string;
    newTime: string;
    newDate: string;
}

export const initialState: IInput = {
    newTodo: '',
    newTime: '',
    newDate: ''
};


type TodoAction = NewTodoAction | NewTimeAction | NewDateAction ;
export const todoReducer = (state: IInput , action: TodoAction) => {
    const {type, payload} = action;

    switch(type){
        case NEW_TODO:
            return {
                ...state,
                newTodo: payload
            }

        case NEW_TIME:
            return{
                ...state,
                newTime: payload
            }
        
        case NEW_DATE:
            return{
                ...state,
                newDate: payload
            }
    }
}

