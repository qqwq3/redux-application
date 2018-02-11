
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableNativeFeedback,
    Alert
} from 'react-native';
import {TextInputLayout} from 'rn-textinputlayout';
import { connect } from 'react-redux';
import { doLoginStart } from '../actions/Login';

const {width, height} = Dimensions.get('window');

class Login extends Component<{}> {
    shouldComponentUpdate(nextProps,nextState){
        const { navigate } = this.props.navigation;

        if(nextProps.status === 'done' && nextProps.isSuccess){
            navigate("Home",{user: nextProps.user});
            return false;
        }
        return true;
    }
    render() {
        let tips;
        if (this.props.status === 'init')
        {
            tips = '请点击登录';
        }
        else if (this.props.status === 'doing')
        {
            tips = '正在登录...';
        }
        else if (this.props.status === 'done' && !this.props.isSuccess)
        {
            tips = '登录失败, 请重新登录';
        }

        return (
            <View style={styles.container}>
                <Text>{tips}</Text>

                <TextInputLayout
                    style={styles.inputLayout}
                    labelFontSize={12}
                    labelText={'请输入账号'}
                    focusColor={'#f3916b'}
                >
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        ref={ref => this._nameRef = ref}
                        defaultValue={null}
                    />
                </TextInputLayout>
                <TextInputLayout
                    style={styles.inputLayout}
                    focusColor={'#f3916b'}
                    labelFontSize={12}
                    labelText={'请输入密码'}
                >
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                        ref={ref => this._passRef = ref}
                        defaultValue={null}
                    />
                </TextInputLayout>

                <TouchableNativeFeedback
                    onPress={this._login.bind(this)}
                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={styles.loginView}>
                        <Text style={styles.loginText}>登录</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
    _login(){
        let name = this._nameRef && this._nameRef._lastNativeText;
        let pass = this._passRef && this._passRef._lastNativeText;
        const { dispatch } = this.props;

        this._nameRef && this._nameRef.blur();
        this._passRef && this._passRef.blur();

        if(name === undefined){
            return Alert.alert('系统提示','请输入姓名哦！',[
                {
                    text:'关闭',onPress:() =>
                {
                    return this._nameRef.focus() && this._nameRef.clear();
                }
                }
            ]);
        }

        if(pass === undefined){
            return Alert.alert('系统提示','请输入密码哦！',[
                {
                    text:'关闭',onPress:() =>
                {
                    return this._passRef.focus() && this._passRef.clear();
                }
                }
            ]);
        }

        dispatch(doLoginStart());
    }
}

function select(store){
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
    };
}

export default connect(select)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        fontSize: 14,
        height: 40
    },
    inputLayout: {
        marginHorizontal: 36,
        width: width - 100
    },
    loginView:{
        width: width - 100,
        height: 40,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: 30
    },
    loginText:{
        fontSize:16,
        color: '#ffffff'
    }
});
