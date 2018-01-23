import React from 'react'

let searchBarStyle = {
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

let inputStyle = {
  border: 'none',
  flexGrow: 1
}

let iconStyle = {
  
}

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      keyword: ''
    }
  }
  render() {
    return (
      <div style={searchBarStyle}>
        <i className="material-icons" style={iconStyle}>
          search
        </i>
        <input type="text" style={inputStyle} />
        <i className="material-icons" style={iconStyle}>
          clear
        </i>
      </div>
    )
  }
}
export default SearchBar
