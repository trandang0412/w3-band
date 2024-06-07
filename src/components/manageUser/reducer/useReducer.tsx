import { GET_DATA } from "./type";

interface getDataAction {
    type: 'GET_DATA'
    payload: any
}

type userAction = getDataAction;

type State = {
    data: any;
    loading: boolean;
    error: string | null;
  };

export const initalState: State = {
    data: null,
    loading: true,
    error: null,
}

export const userReducer = (state: State, action: userAction) => {
    const {type} = action;

    switch(type){
        case  GET_DATA:
            return{
                ...state,
                loading: true,
                error: null,
            }
        default:
            throw new Error('lỗi rồi tml ơi')
    }
}