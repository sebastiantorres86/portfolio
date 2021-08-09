import React from 'react'
import {
  Column,
  Container,
  Description,
  Row,
  StyledImage,
  Tag,
  Title,
  Button,
  ButtonOutlined,
  ContainerButton
} from './Project.styled'

const Project = () => {
  return (
    <Container>
      <Row>
        <StyledImage />
      </Row>
      <Column>
        <div>
          <Tag>#HTML</Tag>
          <Tag>#CSS</Tag>
          <Tag>#responsive</Tag>
        </div>
        <Title>Recipe Blog</Title>
        <Description>
          In this project, I work with HTML and CSS to create a responsive page
          . The design is from devchallenge.io. Donec aliquam est dui, vel
          vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
        </Description>
        <ContainerButton>
          <Button href='##' target='_blank'>
            Demo
          </Button>
          <ButtonOutlined href='##' target='_blank'>
            Code
          </ButtonOutlined>
        </ContainerButton>
      </Column>
    </Container>
  )
}

export default Project
