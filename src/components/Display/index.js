import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Display extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }

    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text style={[styles.textDisplay]}>{this.props.value}</Text>
            </View>
        )
    };
}

export default Display;
