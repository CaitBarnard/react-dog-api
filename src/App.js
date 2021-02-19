import "./App.css";
import { Component } from "react";
import Breed from './components/Breed';
class App extends Component {
  state = {
    dog: []
  };
  
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dog: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <img src={this.state.dog.message} alt="Dog" />
        </div>
        <Breed /> 
      </div>
    );
  }
}

export default App;
