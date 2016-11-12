import React from 'react';

const styles = {
  searchOuter : {
    margin: '20px',
    textAlign: 'center'
  },
  searchInput: {
    width: '75%'
  }
}

class SearchBar extends React.Component {


  constructor() {
    super()
    this.state = {term: "react"}
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(e) {
    this.setState({term:e.target.value})
    this.props.onInputChange(e.target.value)
  }


  render() {
    return (
      <div style={styles.searchOuter}>
        <input style={styles.searchInput} value={this.state.term} type="text" onChange={this.onChangeHandler}/>
      </div>
    )
  }

}


export default SearchBar
