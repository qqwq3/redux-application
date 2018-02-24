
import React,{ Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import * as types from '../contains/ActionTypes';

class Home extends Component<{}>{
    componentWillMount(){
        console.log('Home',this.props);

    }
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>这里是首页</Text>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this._onPress.bind(this)}
                    style={styles.btn}
                >
                    <Text>点击这里</Text>
                </TouchableOpacity>
            </View>
        );
    }
    _onPress(){
        const { dispatch } = this.props;
    }
}

const restore = (store) => {
    return {

    };
};

export default connect(restore)(Home);

const styles = StyleSheet.create({
    btn: {
        height:40,
        width:100,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center'
    }
});
































