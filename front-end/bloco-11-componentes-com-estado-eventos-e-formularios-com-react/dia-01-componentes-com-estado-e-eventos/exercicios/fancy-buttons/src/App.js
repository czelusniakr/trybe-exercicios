import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.stage = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleButtonOne() {
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
    console.log(this);
    console.log('Clicou no botão 1!');
  }
  
  handleButtonTwo() {
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
    console.log(this);
    console.log('Clicou no botão 2!');
  }
  
  handleButtonThree() {
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }));
    console.log(this);
    console.log('Clicou no botão 3!');
  }
  
  render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1 | Count = {this.state.clicksBtnOne}</button>
        <button onClick={ this.handleButtonTwo }>Botão 2 | Count = {this.state.clicksBtnTwo}</button>
        <button onClick={ this.handleButtonThree }>Botão 3 | Count = {this.state.clicksBtnThree}</button>
      </div>
    );
  }
}

export default App;
