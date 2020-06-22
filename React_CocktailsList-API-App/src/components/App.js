import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) return <p>Error {error.message}</p>;
    else if (!isLoaded) return <p>Loading...</p>;
    else {
      return (
        <div className="App">
          <ul className="App-ul">
            {items.map((item) => (
              <li key={item.name}>
                <div className="App-li">
                  {item.strDrink}
                  <img
                    className="App-img"
                    width="50"
                    height="50"
                    src={item.strDrinkThumb}
                    alt="cocktail_photo"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
