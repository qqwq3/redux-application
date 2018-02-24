
import React,{ Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Provider } from 'react-redux';
import Navgator from '../routers/routers';
import { store } from '../store/store';
// import configureStore from '../store/store';

//let store = configureStore();

class App extends Component<{}>{
    render(){
        return (
            <Provider store={store}>
                <Navgator/>
            </Provider>
        );
    }
}

export default App;













































