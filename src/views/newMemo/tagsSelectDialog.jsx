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
import Slide from 'material-ui/transitions/Slide'
import nexus from '@/api'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class TagsSelectorDialog extends React.Component {
  state = {
    keyword: '',
    tags: ['videogame_asset', 'face', 'book', 'location_on'],
    checked: []
  }
  componentDidMount = () => {
    nexus
      .get('/tag')
      .then(res => {
        console.log(res)
        this.setState({
          tags: res
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  handleClose = () => {
    this.props.onClose()
  }

  handleListItemClick = value => {
    this.props.onClose(value)
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
        <SearchBar onRequestSearch={this.handleSearch} />
        <List>
          {this.state.tags.map(tag => (
            <ListItem button key={tag.name}>
              <ListItemIcon>
                <i
                  className="material-icons"
                  style={{ width: 'auto', height: 'auto' }}
                >
                  {tag.icon}
                </i>
              </ListItemIcon>
              <ListItemText primary={tag.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(tag.name)}
                  checked={this.state.checked.indexOf(tag.name) !== -1}
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
