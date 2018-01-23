import React from 'react'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
// import Icon from 'material-ui/Icon'

class TagsSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chips: ['videogame_asset', 'face', 'book', 'location_on']
    }
  }
  handleClick = () => {}
  handleDelete = () => {}
  render() {
    return (
      <List subheader={<ListSubheader>Tags</ListSubheader>}>
        <div style={{ padding: '0 15px' }}>
          {this.state.chips.map(icon => (
            <Chip
              key={icon}
              style={{ margin: '0 10px 15px 0' }}
              avatar={
                <Avatar>
                  <i
                    className="material-icons"
                    style={{ width: 'auto', height: 'auto' }}
                  >
                    {icon}
                  </i>
                </Avatar>
              }
              label={icon}
              onClick={this.handleClick}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </List>
    )
  }
}

export default TagsSelector
