
import React,{ Component } from 'react';
import { StackNavigator, TabBarBottom, TabNavigator,NavigationActions } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import TabBarItem from '../common/TabBarItem';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Course from '../pages/Course';

// 路由的基本配置
const TabRouterConfigs = {
    // 首页
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            tabBarVisible: true,
            tabBarLabel: '首页',
            tabBarIcon: ({focused,tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    source={require('../images/iconHome.png')}
                />
            )
        }),
    },
    // 课程
    Course: {
        screen: Course,
        navigationOptions:({navigation}) => ({
            tabBarVisible: true,
            tabBarLabel: '课程',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    source={require('../images/iconLibrary.png')}
                />
            )
        })
    }
};

const tabBarOptions = {
    style: {
        backgroundColor: '#ffffff',
        height: 45,
    },
    indicatorStyle: {
        height: 0                            // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    activeTintColor: "#ff8500",              // 文字和图片选中颜色
    inactiveTintColor: "#999999",            // 文字和图片未选中颜色
    showIcon: true,                          // android 默认不显示 icon, 需要设置为 true 才会显示
    labelStyle:{ fontSize: 12 }
};

// 路由的切换相关配置
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    lazy: true,                              // 是否懒加载页面
    animationEnabled: true,                  // 切换页面时是否有动画效果
    tabBarPosition: 'bottom',                // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true,                      // 是否可以左右滑动切换tab
    backBehavior: 'none',                    // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: tabBarOptions
};

// 合成tab切换
const TabRouters = TabNavigator(TabRouterConfigs,TabNavigatorConfigs);

const StackRouteConfigs = {
    Login: {
        screen: Login,
        navigationOptions:({navigation}) => ({
            header: null,
            gesturesEnabled: false
        })
    },
    TabRouters: {
        screen: TabRouters,
        navigationOptions:({navigation}) => ({
            header: null,
            gesturesEnabled: false
        })
    }
};

const StackNavigatorConfigs = {
    mode: 'card',
    headerMode: 'screen',
    initialRouteName: 'Login',
    initialRouteParams: {},
    transitionConfig:()=>({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
};

const Navgator = StackNavigator(StackRouteConfigs,StackNavigatorConfigs);

// 防止速点
const navigateOnce = (getStateForAction) => (action, state) => {
    const {type, routeName} = action;
    return (
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
    ) ? null : getStateForAction(action, state);
};

Navgator.router.getStateForAction = navigateOnce(Navgator.router.getStateForAction);

export default Navgator;



















































