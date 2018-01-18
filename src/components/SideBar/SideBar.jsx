import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import { Link } from 'react-router-dom'
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from 'material-ui/List'
import InboxIcon from 'material-ui-icons/Inbox'

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  }
}

class TemporaryDrawer extends React.Component {
  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <ListSubheader>MENU</ListSubheader>
        <List>
          <ListItem button component={Link} to="/" >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Memo" />
          </ListItem>
          <ListItem button component={Link} to="/tags" >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Tags" />
          </ListItem>
          <ListItem button component={Link} to="/star" >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Star" />
          </ListItem>
        </List>
      </div>
    )

    return (
      <div>
        <Drawer open={this.props.open} onClose={this.props.onSideBarClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onSideBarClose}
            onKeyDown={this.props.onSideBarClose}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TemporaryDrawer)
