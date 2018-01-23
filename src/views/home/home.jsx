import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

function FolderList(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemText primary="Work" secondary="Jan 7, 2016" />
        </ListItem>
      </List>
      <Button
        fab
        mini
        color="primary"
        aria-label="add"
        // onClick={this.handleClickOpen}
      >
        <AddIcon />
      </Button>
    </div>
  )
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FolderList)
