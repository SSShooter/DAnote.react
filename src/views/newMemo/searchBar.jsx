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

let searchIconStyle = {
  marginLeft:'16px'
}

let clearIconStyle = {
  marginRight:'16px'
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
        <i className="material-icons" style={searchIconStyle}>
          search
        </i>
        <input type="text" style={inputStyle} />
        <i className="material-icons" style={clearIconStyle} onClick={this.props.onClose}>
          clear
        </i>
      </div>
    )
  }
}
export default SearchBar
