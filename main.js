import React from 'react';

class Main extends React.Component {
   constructor() {
       super();
       this.state = {
           result: "",
           currentResult: "",
           operator: ""
       }
   }

   addNumber (e) {
       let newNumber = this.state.result + e.target.value;
       this.setState ({
           result: newNumber
       })
   }

   processOperator (e) {
       this.setState ({
           currentResult: this.state.result,
           operator: e.target.value
       })

       let ololo = (+this.state.currentResult / +this.state.result);

       this.setState ({
           result: ololo
       })
   }

   get currentResult () {
       return this.state.currentResult + this.state.operator
   }

   render() {
        return(
            <div className="calculator">
                <div class="calcWindow">
                    <div className="currentResult">
                        {this.currentResult || 0}
                    </div>
                    <div className="result">
                        {this.state.result || 0}
                    </div>
                </div>
                <div class="buttonsRow">
                    <button name="backspase">&#8592;</button>
                    <button name="CE">CE</button>
                    <button name="C">C</button>
                    <button name="plusMinusBtn">&#177;</button>
                    <button name="squareRoot">&#8730;</button>
                </div>
                <div class="buttonsRow">
                    <button value="7" name="seven" onClick={this.addNumber.bind(this)}>7</button>
                    <button value="8" name="eight" onClick={this.addNumber.bind(this)}>8</button>
                    <button value="9" name="nine" onClick={this.addNumber.bind(this)}>9</button>
                    <button value=" / " name="division" onClick={this.processOperator.bind(this)}>/</button>
                    <button name="percent">%</button>
                </div>
                <div class="buttonsRow">
                    <button value="4" name="four" onClick={this.addNumber.bind(this)}>4</button>
                    <button value="5" name="five" onClick={this.addNumber.bind(this)}>5</button>
                    <button value="6" name="six" onClick={this.addNumber.bind(this)}>6</button>
                    <button value=" * " name="multiplication">*</button>
                    <button name="fraction">1/<i>x</i></button>
                </div>
                <div class="buttonsRow">
                    <button value="1" name="one" onClick={this.addNumber.bind(this)}>1</button>
                    <button value="2" name="two" onClick={this.addNumber.bind(this)}>2</button>
                    <button value="3" name="three" onClick={this.addNumber.bind(this)}>3</button>
                    <button value=" - " name="minus">-</button>
                    <button className="btnEqual" name="equal">=</button>
                </div>
                <div class="buttonsRow">
                    <button className="btnZero" value="0" name="zero" onClick={this.addNumber.bind(this)}>0</button>
                    <button value="." name="," onClick={this.addNumber.bind(this)}>,</button>
                    <button value=" + " name="plus">+</button>
                </div>
            </div>
       )
   }
}
export default Main;
