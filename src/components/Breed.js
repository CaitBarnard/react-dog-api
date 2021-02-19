import "../App.css";
import { Component } from "react";

const breeds = [
  {
    label: "Random",
    value: "",
  },
  {
    label: "Airedale",
    value: "airedale",
  },
  {
    label: "Akita",
    value: "akita",
  },
  {
    label: "Dachshund",
    value: "dachshund",
  },
];
class Breed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: "",
      dog: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ breed: e.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      fetch("https://dog.ceo/api/breed/" + this.state.breed + "/images/random")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ dog: data });
        })
        .catch(console.log);
    }
  }

  render() {
    return (
      <div className="select-container">
        <select value={this.state.breed} onChange={this.handleChange}>
          {breeds.map((breed) => (
            <option value={breed.value}>{breed.label}</option>
          ))}
        </select>
        <div className="card">
          <img src={this.state.dog.message} alt="Dog" />
        </div>
      </div>
    );
  }
}

export default Breed;
