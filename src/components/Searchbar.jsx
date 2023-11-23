import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

class Searchbar extends Component {
  constructor(props) {
    // Call the constructor of the parent class (Component)
    super(props);

    // Initialize the state
    this.state = { value: "" };

    // Bind event handler methods to the current instance of the class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Event handler method for handling changes in the input field
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // Event handler method for handling form submission
  handleSubmit(event) {
    event.preventDefault();

    console.log("submitted");
  }

  // Render method that defines the component's UI
  render() {
    const { handleSearchVisibility } = this.props;

    return (
      <div className="form-container">
        <button className="cancel-btn">
          <TfiClose onClick={handleSearchVisibility} />
        </button>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            id="search"
            placeholder="Search Here"
            value={this.state.value}
            onChange={this.handleChange}
            className="input-form"
          />
          <button className="search-box" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
