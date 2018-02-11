
import React,{ Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class Home extends Component<{}>{
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>这里是首页</Text>
            </View>
        );
    }
}

export default connect()(Home);

const styles = StyleSheet.create({

});
































