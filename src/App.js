import React from 'react';
import { StatusBar, View } from 'react-native';

import Display from "./components/Display";
import KeyBoard from "./components/KeyBoard";

import styles from './styles';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayValue: "0",
        }

        this.num = null;
        this.operator = "";
        this.haveOperator = true;
    }

    resetCalc = () => {
        this.num = null;
        this.operator = "";
        this.ableOperator = true;
    }

    calculate = (operator, value = [0, 0]) => {

        value[0] = parseFloat(value[0]);
        value[1] = parseFloat(value[1]);

        if (operator == "x") {
            return value[0] * value[1];
        }

        else if (operator == "/") {
            return value[0] / value[1];
        }
        
        else if (operator == "+") {
            return value[0] + value[1];
        }

        else if (operator == "-") {
            return value[0] - value[1];
        }
    }

    setDisplay = (value = "0") => {
        const numeric = ".0123456789";
        const operators = "%=";
        const arithOperators = "/x+-";

        let displayCurrent = this.state.displayValue;

        if (numeric.includes(value)) {
            if (value == ".") {
                if (!this.ableOperator) {
                    return;
                }

                this.ableOperator = false;
            }

            if (displayCurrent == "0" && value != ".") {
                displayCurrent = "";
            }

            displayCurrent = displayCurrent.concat(value);
        }

        else if (value == "<") {
            if (displayCurrent.length > 1) {

                displayCurrent = displayCurrent.split("");
                displayCurrent.pop();
                displayCurrent = displayCurrent.join("");
            }
            else {
                displayCurrent = "0";
            }
        }

        else if (value == "ce" || value =="c") {
            displayCurrent = "0";
            this.resetCalc();
        }

        else if (operators.includes(value) || arithOperators.includes(value)) {
            let displayCurrentNum = parseFloat(displayCurrent);

            if (value == "%") {
                displayCurrentNum /= 100;
            }

            else if (value == "+-") {
                displayCurrentNum *= -1;
            }

            if (!this.num) {
                displayCurrent = `${displayCurrentNum}`;
            }

            if (arithOperators.includes(value)) {
                if (!this.num) {
                    this.num = displayCurrentNum;
                    this.operator = value;
                    displayCurrent = displayCurrent.concat(value);
                    this.ableOperator = true;
                }
            }

            else if (value == "=") {
                if (this.num != null) {
                    displayCurrent = `${this.calculate(this.operator, displayCurrent.split(this.operator))}`;
                    this.resetCalc();
                }
            }
        }

        this.setState({
            displayValue: displayCurrent,
        });
    }

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar barStyle="light-content" backgroundColor="#000000" />
                
                <Display value={this.state.displayValue} />
                <KeyBoard onPress={this.setDisplay}/>
            </View>
        )
    };
}

export default App;
