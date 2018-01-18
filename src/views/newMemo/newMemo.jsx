import React from 'react'
import TextField from 'material-ui/TextField'
import TagsSelector from './tagsSelector'

class NewMemo extends React.Component {
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
        <TagsSelector />
      </div>
    )
  }
}

export default NewMemo
