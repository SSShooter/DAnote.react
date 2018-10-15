import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import { Route } from 'react-router-dom'

import SideBar from '../SideBar/SideBar'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class ButtonAppBar extends React.Component {
  state = {
    switch: false
  }
  toggleDrawer = () => {
    this.setState({
      switch: !this.state.switch
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Route path="/" exact component={HomeBar} />
            <Route path="/new" exact component={DetailBar} />
          </Toolbar>
        </AppBar>
        <SideBar open={this.state.switch} onSideBarClose={this.toggleDrawer} />
      </div>
    )
  }
}

const DetailBar = () => (
  <React.Fragment>
    <Typography type="title" color="inherit" style={{flexGrow: 1}}>
      Title
    </Typography>
    <Button color="inherit">save</Button>
  </React.Fragment>
)

const HomeBar = () => (
  <React.Fragment>
    <Typography type="title" color="inherit" style={{flexGrow: 1}}>
      Home
    </Typography>
  </React.Fragment>
)

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
