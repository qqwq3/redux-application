
import * as types from '../contains/ActionTypes';

const initialState = {
    status: 'init', // init,doing,done
    isSuccess: false,
    user: null
};

// 做处理
function loginIn(state = initialState, action) {
    switch (action.type){
        case types.LOGIN_IN_INIT:
            return Object.assign({},state,{
                status: 'init',
                isSuccess: false,
                user: null
            });
            break;

        case types.LOGIN_IN_DOING:
            return Object.assign({},state,{
                status: 'doing',
                isSuccess: false,
                user: null
            });
            break;

        case types.LOGIN_IN_DONE:
            return Object.assign({},state,{
                status:'done',
                isSuccess: action.isSuccess,
                user: action.user
            });
            break;

        default:
            return state;
    }
}

export default loginIn;













