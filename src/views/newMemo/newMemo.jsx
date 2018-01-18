import React from 'react'
import TextField from 'material-ui/TextField'

class NewMemo extends React.Component {
  render() {
    return (
      <div style={{ padding: '0 20px' }}>
        <TextField
          label="Title"
          margin="normal"
          placeholder="Give it a title"
          fullWidth
        />
        <TextField
          label="Content"
          multiline
          rows="4"
          margin="normal"
          placeholder="Something happend?"
          fullWidth
        />
      </div>
    )
  }
}

export default NewMemo
