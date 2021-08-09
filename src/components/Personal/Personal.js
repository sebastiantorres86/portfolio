import React from 'react'
import {
  Container,
  Div,
  Data,
  StyledImage,
  Row,
  Column,
  Copy
} from './Personal.styled'

const personal = {
  name: 'Sebastian Torres',
  job: 'Front-end developer',
  email: 'seba.torres.mail@gmail.com',
  phone: '(+54) 223 525 4063',
  copy:
    'Self-motivated developer, who is willing to learn and create outstanding UI applications.'
}

const Personal = () => {
  return (
    <Container>
      <Row>
        <StyledImage />
      </Row>
      <Column>
        <Row>
          <Div>
            <h2>{personal.name}</h2>
            <h3>{personal.job}</h3>
          </Div>
          <Div>
            <Data>{personal.email}</Data>
            <Data>{personal.phone}</Data>
          </Div>
        </Row>

        <Div>
          <Copy>{personal.copy}</Copy>
        </Div>
      </Column>
    </Container>
  )
}

export default Personal
