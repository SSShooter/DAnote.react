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
import { observer } from 'mobx-react'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

@observer
class TagsSelectorDialog extends React.Component {
  state = {
    keyword: '',
    checked: [],
    tags:[]
  }
  componentDidMount = () => {
    nexus
      .get('/tag')
      .then(res => {
        console.log(res)
        this.state.tags = res
      })
      .catch(err => {
        console.log(err)
      })
  }
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
        <SearchBar onClose={this.handleClose} />
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
