import React from 'react';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

class TagsSelector extends React.Component {
  handleClick = () => {

  }
  handleDelete = () => {

  }
  async render() {
    let FaceIcon = await import('material-ui-icons/Face')
    return (
      <List subheader={<ListSubheader>Tags</ListSubheader>}>
        <ListItem>
          <Chip
            avatar={
              <Avatar>
                <FaceIcon />
              </Avatar>
            }
            label="happy"
            onClick={this.handleClick}
            onDelete={this.handleDelete}
          />

        </ListItem>
      </List>
    )
  }
}

export default TagsSelector
