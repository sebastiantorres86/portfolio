import React from 'react'
import {
  Container,
  Row,
  Column,
  Title,
  SkillName,
  Bar,
  SkillContainer,
  BlueBar
} from './Skills.styled'

const Skill = ({ name, percentage }) => {
  return (
    <SkillContainer>
      <SkillName>{name}</SkillName>
      <Bar>
        <BlueBar percentage={percentage}></BlueBar>
      </Bar>
    </SkillContainer>
  )
}

const Skills = () => {
  return (
    <Container>
      <Title>front end</Title>
      <Row>
        <Column>
          <Skill name='React' percentage='50' />
          <Skill name='Javascript' percentage='80' />
          <Skill name='CSS' percentage='90' />
        </Column>
        <Column>
          <Skill name='Redux' percentage='25' />
          <Skill name='TypeScript' percentage='65' />
          <Skill name='HTML' percentage='95' />
        </Column>
      </Row>
    </Container>
  )
}

export default Skills
