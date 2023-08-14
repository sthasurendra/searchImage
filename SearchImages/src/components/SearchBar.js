import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     term: '',
  //   };
  //   //step 1 to keep focus in input
  //   this.inputRef = React.createRef();
  // }

  //step 2 to keep focus in input
  // focusInput = () => {
  //   this.inputRef.current.focus();
  // };

  //step 3 to keep focus in input and add ref in input tag
  // componentDidMount() {
  //   this.inputRef.current.focus();
  // }
  //** callback function */
  //** Assigning arrow function to prevent the error in console */
  onFormSubmit = (event) => {
    event.preventDefault();

    //** onSubmit is a props of SearchBar coming from App component */
    this.props.onSubmit(this.state.term);
    // console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Pics</label>
            <input
              type="text"
              // ref={this.inputRef}
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
