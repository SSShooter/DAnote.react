import React from 'react'
import TextField from 'material-ui/TextField'
import TagsSelector from './tagsSelector'
import TagsSelectDialog from './tagsSelectDialog'

class NewMemo extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    console.log('open')
    this.setState({
      open: true
    })
  }

  handleClose = value => {
    this.setState({ selectedValue: value, open: false })
  }
  render() {
    return (
      <div>
        <div style={{ padding: '0 15px' }}>
          <TextField
            label="Title"
            margin="normal"
            placeholder="Give it a title"
            fullWidth
          />
          <TextField
            label="Content"
            multiline
            rows="5"
            margin="normal"
            placeholder="Something happend?"
            fullWidth
          />
        </div>
        {/* onClick只作用于dom元素 */}
        <div onClick={this.handleClickOpen}>
          <TagsSelector />
        </div>
        <TagsSelectDialog open={this.state.open} onClose={this.handleClose} />
      </div>
    )
  }
}

export default NewMemo
