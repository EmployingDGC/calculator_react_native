import React from 'react';
import { View } from 'react-native';

import CustomButton from "../CustomButton";

import styles from './styles';

class KeyBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.row]}>
                    <CustomButton tittle="%" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("%")} touchSoundDisabled />
                    <CustomButton tittle="CE" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("ce")} touchSoundDisabled />
                    <CustomButton tittle="C" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("c")} touchSoundDisabled />
                    <CustomButton tittle="<" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("<")} touchSoundDisabled />
                </View>
                <View style={[styles.row]}>
                    <CustomButton tittle="" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => false} touchSoundDisabled />
                    <CustomButton tittle="" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => false} touchSoundDisabled />
                    <CustomButton tittle="" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => false} touchSoundDisabled />
                    <CustomButton tittle="/" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("/")} touchSoundDisabled />
                </View>
                <View style={[styles.row]}>
                    <CustomButton tittle="7" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("7")} touchSoundDisabled />
                    <CustomButton tittle="8" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("8")} touchSoundDisabled />
                    <CustomButton tittle="9" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("9")} touchSoundDisabled />
                    <CustomButton tittle="X" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("x")} touchSoundDisabled />
                </View>
                <View style={[styles.row]}>
                    <CustomButton tittle="4" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("4")} touchSoundDisabled />
                    <CustomButton tittle="5" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("5")} touchSoundDisabled />
                    <CustomButton tittle="6" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("6")} touchSoundDisabled />
                    <CustomButton tittle="-" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("-")} touchSoundDisabled />
                </View>
                <View style={[styles.row]}>
                    <CustomButton tittle="1" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("1")} touchSoundDisabled />
                    <CustomButton tittle="2" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("2")} touchSoundDisabled />
                    <CustomButton tittle="3" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("3")} touchSoundDisabled />
                    <CustomButton tittle="+" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("+")} touchSoundDisabled />
                </View>
                <View style={[styles.row]}>
                    <CustomButton tittle="+-" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("+-")} touchSoundDisabled />
                    <CustomButton tittle="0" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("0")} touchSoundDisabled />
                    <CustomButton tittle="." styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress(".")} touchSoundDisabled />
                    <CustomButton tittle="=" styleButton={[styles.styleButton]} styleText={[styles.styleText]} onPress={() => this.props.onPress("=")} touchSoundDisabled />
                </View>
            </View>
        )
    };
}

export default KeyBoard;
