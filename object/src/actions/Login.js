
import * as types from '../contains/ActionTypes';

// 模拟数据
let user = {
    name: 'lisong',
    age: 24
};

let url = 'http://139.196.160.162:8888/api/app/book/get-chapter?chapter_id=book_id69de53b82bbf901b';

// 执行登录
function doLoginStart(){
    return dispatch => {
        dispatch(doLoginIning());

        let result = fetch(url).then(response => response.json()).then((res) => {
            dispatch(doLoginDone(true,user));
        }).catch(err => {
            dispatch(doLoginDone(false,null));
        });
    };
}

// 登录中
function doLoginIning(){
    return {
        type: types.LOGIN_IN_DOING
    }
}

// 登录完成
function doLoginDone(isSuccess,user){
    return {
        type:types.LOGIN_IN_DONE,
        isSuccess: isSuccess,
        user: user
    }
}

export { doLoginStart };































