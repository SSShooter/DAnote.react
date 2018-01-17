import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import { withRouter } from 'react-router-dom'
// import Button from 'material-ui/Button'
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
  goDetail = ()=> {
    this.props.history.push('/tags')
  }
  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <ListSubheader>MENU</ListSubheader>
        <List>
          <ListItem button onClick={this.goDetail}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
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

export default withRouter(withStyles(styles)(TemporaryDrawer))
