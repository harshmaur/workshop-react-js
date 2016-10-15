import React from 'react';

class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      term : ""
    }
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <div className="search-bar">
      <input value={this.state.term} onChange={ (e) => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default Search