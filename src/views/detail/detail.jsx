import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import nexus from '@/api'

const Title = styled.div`
  padding: 5px;
  font-size: 1.1rem;
`

const ItemBox = styled.section`
  padding: 5px;
  font-size: 1rem;
`
const Date = styled.div`
  text-align: right;
`

class MemoDetail extends Component {
  state = {
    title: 'wow it is detail',
    content: ['233223', '内容2', '超长内容'],
    date: ['8102-2-2', '8102-2-3', '8102-2-4']
  }
  componentDidMount = () => {
    let id = '5acefaa94b10de23a4566b5c'
    nexus
      .patch('api/memo/' + id,{
        content:'23332333',
        date:'2018-03-02'
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div style={{ padding: '1.2rem' }}>
        <Title>{this.state.title}</Title>
        {this.state.content.map((val, index) => (
          <ItemBox key={index}>
            <div>{val}</div>
            <Date>{this.state.date[index]}</Date>
          </ItemBox>
        ))}

        <TextField
          label="Content"
          multiline
          rows="5"
          margin="normal"
          placeholder="Something happend?"
          fullWidth
        />
        <Button style={{ float: 'right' }}>send</Button>
      </div>
    )
  }
}

export default MemoDetail
