import React from 'react'
import {
  Container,
  Copy,
  Hobbie,
  Row,
  StyledImage,
  SubTitle,
  Title
} from './Hobbies.styled'
import gaming from '../../assets/hello-lightbulb-XC3fq-ffXRI-unsplash.jpg'
import cooking from '../../assets/jeff-sheldon-6MT4_Ut8a3Y-unsplash.jpg'
import biking from '../../assets/dan-russo-XGkl5yYHxyA-unsplash.jpg'

const Hobbies = () => {
  return (
    <Container>
      <Row>
        <Title>Hobbies</Title>
      </Row>
      <Row>
        <Hobbie>
          <StyledImage image={gaming} />
          <SubTitle>Gaming</SubTitle>
          <Copy>Quisque feugiat malesuada molestie.</Copy>
        </Hobbie>

        <Hobbie>
          <StyledImage image={cooking} />
          <SubTitle>Cooking</SubTitle>
          <Copy>Quisque feugiat malesuada molestie.</Copy>
        </Hobbie>

        <Hobbie>
          <StyledImage image={biking} />
          <SubTitle>Biking</SubTitle>
          <Copy>Quisque feugiat malesuada molestie.</Copy>
        </Hobbie>
      </Row>
    </Container>
  )
}

export default Hobbies
