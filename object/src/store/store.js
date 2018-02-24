
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/reducers';

// 用reducer来创建store
// const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);
//
// // let isDebugChrome = __DEV__ && !!window.navigator.userAgent;
//
// function configStore(initialState){
//     const store = createStoreWithMiddleware(reducers,initialState);
//
//     // if(isDebugChrome){
//     //     window.store = store;
//     // }
//
//     return store;
// }
//
// export default configStore;

export const store = createStore(reducers,applyMiddleware(thunk,logger));























