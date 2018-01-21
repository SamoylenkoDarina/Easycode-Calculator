import React from 'react';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            number: "",
            secondNumber: "",
            currentResult: "",
            operator: ""
        }
    }

    addNumber (e) {
        let newNumber = this.state.operator ? this.state.secondNumber : this.state.number;
        newNumber += e.target.value;
        
        if (this.state.operator) {
            this.setState ({
                secondNumber: newNumber
            });
            return;
        }

        this.setState ({
           number: newNumber
        })
    }

    dotsHunter (e) {
        let numberValue = this.state.operator ? this.state.secondNumber : this.state.number
        if (numberValue.indexOf('.') > -1) {
            return;
        }
        const numberKey = this.state.operator ? 'secondNumber' : 'number';
        numberValue = numberValue || '0';
        this.setState({
            [numberKey]: numberValue + e.target.value
        })
        
        
    }

    clear () {
        this.setState({
            currentResult: '',
            number: '',
            secondNumber: '',
            operator: ''
        }) 
    }

    processOperator (e) {
        this.setState({
            operator: '',
            secondNumber: ''
        })
        const result = this.calculate(e.target.name)
        this.setState({
            currentResult: result,
            number: result
        })
    }

    calcThroughEqual (e) { 
        if (!this.state.secondNumber) {
            return
        }
        let result = this.calculate(this.state.operator);
        this.setState({
            currentResult: result,
            number: result
        })
   }

    countOperator (e) {
        this.setState({
            operator: e.target.name,
            secondNumber: '',
            currentResult: ''
        })
        if (!this.state.secondNumber || this.state.operator !== e.target.name) {
            return
        }
        let result = this.calculate(this.state.operator);
        this.setState({
            number: result
        })
    }
    calculate (operator) {
        let result;
        switch (operator) {
            case 'sum':
                result = (+this.state.number + +this.state.secondNumber);
                break;
            case 'difference':
                result = (+this.state.number - +this.state.secondNumber);
                break;
            case 'multiplication':
                result = (+this.state.number * +this.state.secondNumber);
                break;
            case 'division':
                result = (+this.state.number / +this.state.secondNumber);
                break;
            case 'sqrt':
                result = Math.sqrt(+this.state.number);
                break;
            case 'pow':
                result = Math.pow(+this.state.number, 2);
                break;
            case 'fraction': 
                result = 1 / +this.state.number;
                break;
            case 'backspace':
                result = this.state.number.slice(0, -1);
                break;
            case 'plusMinusBtn':
                result = this.state.number;    
                if (result.toString().indexOf('-') > -1) {
                    result = result.slice(1);
                } else {
                    result = '-' + result;
                }
                break;
            default:
                break;
        }
        return result;
    }

    render() {
        return(
            <div className="calculator">
                <div className="calcWindow">
                    <div className="result">
                        {this.state.currentResult || this.state.secondNumber || this.state.number || 0}
                    </div>
                </div>
                <div className="buttonsRow">
                    <button name="backspace" onClick={this.processOperator.bind(this)}>&#8592;</button>
                    <button name="CE" onClick={this.clear.bind(this)}>CE</button>
                    <button name="C" onClick={this.clear.bind(this)}>C</button>
                    <button name="plusMinusBtn" onClick={this.processOperator.bind(this)}>&#177;</button>
                    <button name="sqrt" onClick={this.processOperator.bind(this)}>&#8730;</button>
                </div>
                <div className="buttonsRow">
                    <button value="7" name="seven" onClick={this.addNumber.bind(this)}>7</button>
                    <button value="8" name="eight" onClick={this.addNumber.bind(this)}>8</button>
                    <button value="9" name="nine" onClick={this.addNumber.bind(this)}>9</button>
                    <button value=" / " name="division" onClick={this.countOperator.bind(this)}>/</button>
                    <button name="pow" onClick={this.processOperator.bind(this)}>x^2</button>
                </div>
                <div className="buttonsRow">
                    <button value="4" name="four" onClick={this.addNumber.bind(this)}>4</button>
                    <button value="5" name="five" onClick={this.addNumber.bind(this)}>5</button>
                    <button value="6" name="six" onClick={this.addNumber.bind(this)}>6</button>
                    <button value=" * " name="multiplication" onClick={this.countOperator.bind(this)}>*</button>
                    <button name="fraction" onClick={this.processOperator.bind(this)}>1/x</button>
                </div>
                <div className="buttonsRow">
                    <button value="1" name="one" onClick={this.addNumber.bind(this)}>1</button>
                    <button value="2" name="two" onClick={this.addNumber.bind(this)}>2</button>
                    <button value="3" name="three" onClick={this.addNumber.bind(this)}>3</button>
                    <button value=" - " name="difference" onClick={this.countOperator.bind(this)}>-</button>
                    <button className="btnEqual" name="equal" onClick={this.calcThroughEqual.bind(this)}>=</button>
                </div>
                <div className="buttonsRow">
                    <button className="btnZero" value="0" name="zero" onClick={this.addNumber.bind(this)}>0</button>
                    <button value="." name="dot" onClick={this.dotsHunter.bind(this)}>,</button>
                    <button value=" + " name="sum" onClick={this.countOperator.bind(this)}>+</button>
                </div>
            </div>
       )
   }
}
export default Main;
