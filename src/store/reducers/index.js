import {DELETE_ONE_SUCCESS, DELETE_SUCCESS, REND_SUCCESS, SAVE_SUCCESS} from "../actions";

const initialState = {
    data:{},
    open:false,
};


export default function reducer(state = initialState, action) {

    switch (action.type) {

        case SAVE_SUCCESS: {
            const {value} = action.payload;
            const { data } = state;
            data[value] = value;
            return {
                ...state, data:{...data},open:true,
            }
        }

        case DELETE_SUCCESS: {
            return {
                ...state,data:[],open:false
            }
        }

        case DELETE_ONE_SUCCESS: {
            let {value} = action.payload;
            let {data} = state;
            for(let x in value){
                delete data[x]
            }
            return {
                ...state, data:{...data},
            }
        }

        case REND_SUCCESS:{
            let {data} = state;
            return {
                ...state,data:{...data}
            }
        }

        default: {
            return state
        }
    }
}
