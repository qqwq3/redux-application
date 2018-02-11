
import React,{ Component } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

class TabBarItem extends Component<{}>{
    static propTypes = {
        tintColor: PropTypes.string.isRequired,
        source: PropTypes.any,
        resizeMode: PropTypes.string.isRequired,
        focused: PropTypes.bool.isRequired
    };
    static defaultProps = {
        resizeMode: 'cover'
    };
    render() {
        const {tintColor, resizeMode, source, focused} = this.props;

        return (
            <Image
                source={source}
                tintColor={tintColor}
                style={styles.images}
                resizeMode={resizeMode}
            />
        );
    }
}

export default TabBarItem;

const styles = StyleSheet.create({
    images: {
        width: 20,
        height: 20
    }
});
































