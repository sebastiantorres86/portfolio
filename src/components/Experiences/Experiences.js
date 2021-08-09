import React from 'react'
import {
  Container,
  Date,
  DateAndJob,
  Description,
  Job,
  Jobs,
  Logo,
  Row,
  Title
} from './Experiences.styled'
import { ReactComponent as Adidas } from '../../assets/adidas-9.svg'
import { ReactComponent as HandM } from '../../assets/h-m.svg'
import { ReactComponent as Nivea } from '../../assets/nivea-logo.svg'

const Experiences = () => {
  return (
    <Container>
      <Row>
        <Title>Experiences</Title>
      </Row>
      <Row>
        <Jobs>
          <Logo>
            <Adidas width='64px' height='64px' />
          </Logo>
          <DateAndJob>
            <Date>Feb 2017 - Current</Date>
            <Job>Front-end developer</Job>
          </DateAndJob>
          <Description>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </Description>
        </Jobs>

        <Jobs>
          <Logo>
            <HandM width='64px' height='64px' />
          </Logo>
          <DateAndJob>
            <Date>Aug 2016 - Feb 2018</Date>
            <Job>Full-stack developer</Job>
          </DateAndJob>
          <Description>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </Description>
        </Jobs>

        <Jobs>
          <Logo>
            <Nivea width='64px' height='64px' />
          </Logo>
          <DateAndJob>
            <Date>Jun 2015 - Aug 2016</Date>
            <Job>Junior front-end developer</Job>
          </DateAndJob>
          <Description>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </Description>
        </Jobs>
      </Row>
    </Container>
  )
}

export default Experiences
