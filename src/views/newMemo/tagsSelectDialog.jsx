import React from 'react'
import SearchBar from './searchBar'
import Dialog from 'material-ui/Dialog'
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import CloseIcon from 'material-ui-icons/Close'
import Button from 'material-ui/Button'
import Slide from 'material-ui/transitions/Slide'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class TagsSelectorDialog extends React.Component {
  state = {
    keyword: '',
    tags: ['videogame_asset', 'face', 'book', 'location_on'],
    checked: []
  }
  componentDidMount = () => {}

  handleClose = () => {
    this.props.onClose()
  }

  handleToggle = value => () => {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked
    })
  }

  handleSearch = () => {}
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        transition={Transition}
        fullScreen
      >
        <SearchBar onClose={this.handleClose}/>
        <List>
          {this.state.tags.map(icon => (
            <ListItem button key={icon}>
              <ListItemIcon>
                <i
                  className="material-icons"
                  style={{ width: 'auto', height: 'auto' }}
                >
                  {icon}
                </i>
              </ListItemIcon>
              <ListItemText primary={icon} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(icon)}
                  checked={this.state.checked.indexOf(icon) !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Dialog>
    )
  }
}
export default TagsSelectorDialog
